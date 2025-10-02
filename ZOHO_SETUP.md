# Configuración de Zoho CRM

Este documento explica cómo conectar el formulario de contacto con Zoho CRM.

## Opción 1: Web Forms (Recomendado - Más Fácil)

Esta es la forma más sencilla y no requiere autenticación OAuth.

### Pasos:

1. **Ir a Zoho CRM**
   - Abre tu cuenta de Zoho CRM
   - Ve a: `Setup` → `Channels` → `Webforms`

2. **Crear nuevo Web Form**
   - Click en "Create Webform"
   - Selecciona "Leads" como módulo
   - Agrega los siguientes campos:
     - Last Name (Nombre completo del contacto)
     - Email
     - Phone
     - Company
     - No of Employees
     - Description (Mensaje)

3. **Obtener la URL del formulario**
   - Una vez creado, copia la URL del action del formulario
   - Se verá algo como: `https://crm.zoho.com/crm/WebToLeadForm`

4. **Agregar a variables de entorno**
   - Agrega en tu archivo `.env.local`:
   ```
   ZOHO_WEBFORM_URL=https://crm.zoho.com/crm/WebToLeadForm
   ```

5. **Agregar en Vercel**
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega: `ZOHO_WEBFORM_URL` con el valor copiado

6. **Configurar notificaciones (Opcional)**
   - En Zoho CRM: Setup → Automation → Workflow Rules
   - Crea una regla para notificar por email cuando llegue un nuevo lead del website

## Opción 2: Zoho CRM API (Avanzado)

Si necesitas más control, puedes usar la API de Zoho.

### Pasos:

1. **Crear aplicación en Zoho**
   - Ve a: https://api-console.zoho.com/
   - Crea una nueva "Server-based Application"
   - Anota el Client ID y Client Secret

2. **Generar token de acceso**
   - Sigue la documentación de Zoho para OAuth2
   - Genera un refresh token

3. **Agregar variables de entorno**
   ```
   ZOHO_CLIENT_ID=tu_client_id
   ZOHO_CLIENT_SECRET=tu_client_secret
   ZOHO_REFRESH_TOKEN=tu_refresh_token
   ```

4. **Descomentar el código en `/pages/api/zoho-lead.ts`**
   - Busca la sección "Option 2: Zoho CRM API"
   - Descomenta el código

## Testing

Una vez configurado, puedes probar el formulario:

1. Ve a: `http://localhost:3000/contacto`
2. Llena el formulario
3. Verifica que el lead aparezca en Zoho CRM

## Troubleshooting

- **Error 400**: Verifica que todos los campos requeridos estén siendo enviados
- **Error 500**: Revisa los logs del servidor y verifica la URL del web form
- **No aparece en Zoho**: Verifica que el web form esté activo y que la URL sea correcta

## Alternativas

Si prefieres no usar Zoho directamente, puedes:
- Usar Zapier para conectar el formulario con Zoho
- Usar Make (Integromat) para la integración
- Enviar los datos por email usando un servicio SMTP
