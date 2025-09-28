# Configuración de Contentful para el Blog

Este documento explica cómo configurar Contentful CMS para el blog de CleanOps.

## 1. Crear cuenta en Contentful

1. Ve a [contentful.com](https://www.contentful.com/) y crea una cuenta gratuita
2. Crea un nuevo espacio (Space) llamado "CleanOps Blog"

## 2. Configurar Content Types

### Blog Post (blogPost)
Crear un content type llamado "Blog Post" con API ID: `blogPost`

**Campos:**
- **Title** (Short text, required) - API ID: `title`
- **Slug** (Short text, required, unique) - API ID: `slug`
- **Excerpt** (Long text, required) - API ID: `excerpt`
- **Content** (Rich text, required) - API ID: `content`
- **Featured Image** (Media, one file) - API ID: `featuredImage`
- **Author** (Reference, one entry, Blog Author) - API ID: `author`
- **Category** (Reference, one entry, Blog Category) - API ID: `category`
- **Tags** (Reference, many entries, Blog Tag) - API ID: `tags`
- **Published Date** (Date & time, required) - API ID: `publishedDate`
- **Reading Time** (Integer) - API ID: `readingTime`
- **Meta Description** (Long text) - API ID: `metaDescription`
- **Featured** (Boolean) - API ID: `featured`

### Blog Author (blogAuthor)
Crear un content type llamado "Blog Author" con API ID: `blogAuthor`

**Campos:**
- **Name** (Short text, required) - API ID: `name`
- **Bio** (Long text) - API ID: `bio`
- **Avatar** (Media, one file) - API ID: `avatar`

### Blog Category (blogCategory)
Crear un content type llamado "Blog Category" con API ID: `blogCategory`

**Campos:**
- **Name** (Short text, required) - API ID: `name`
- **Slug** (Short text, required, unique) - API ID: `slug`
- **Description** (Long text) - API ID: `description`

### Blog Tag (blogTag)
Crear un content type llamado "Blog Tag" con API ID: `blogTag`

**Campos:**
- **Name** (Short text, required) - API ID: `name`
- **Slug** (Short text, required, unique) - API ID: `slug`
- **Description** (Long text) - API ID: `description`

## 3. Configurar Variables de Entorno

Copia el archivo `.env.local.example` a `.env.local` y configura las siguientes variables:

```env
CONTENTFUL_SPACE_ID=tu_space_id_aqui
CONTENTFUL_ACCESS_TOKEN=tu_access_token_aqui
CONTENTFUL_PREVIEW_ACCESS_TOKEN=tu_preview_token_aqui
CONTENTFUL_ENVIRONMENT=master
```

### Obtener las credenciales:

1. **Space ID**: En Contentful, ve a Settings > General settings
2. **Access Token**: Ve a Settings > API keys > Content delivery / preview tokens
3. **Preview Access Token**: En la misma sección de API keys

## 4. Contenido de Ejemplo

### Categorías sugeridas:
- Tecnología (slug: tecnologia)
- Mejores Prácticas (slug: mejores-practicas)
- Tendencias (slug: tendencias)
- Casos de Éxito (slug: casos-exito)
- Noticias (slug: noticias)

### Tags sugeridos:
- digitalización
- automatización
- eficiencia
- calidad
- innovación
- sostenibilidad
- covid-19
- normativas

### Autor de ejemplo:
- **Nombre**: Equipo CleanOps
- **Bio**: Expertos en digitalización de operaciones de limpieza
- **Avatar**: Logo de CleanOps

### Artículo de ejemplo:
- **Título**: "Cómo digitalizar tu empresa de limpieza en 2024"
- **Slug**: digitalizar-empresa-limpieza-2024
- **Excerpt**: "Descubre las 5 estrategias clave para transformar digitalmente tu empresa de limpieza y aumentar la eficiencia operacional."
- **Categoría**: Tecnología
- **Tags**: digitalización, automatización, eficiencia
- **Tiempo de lectura**: 5 minutos
- **Destacado**: Sí

## 5. Funcionalidades Implementadas

✅ **Blog listing page** (`/blog`)
- Hero section con búsqueda
- Filtros por categoría
- Grid de artículos
- Artículos destacados

✅ **Individual blog post** (`/blog/[slug]`)
- Contenido rico con rich text renderer
- Metadatos SEO
- Artículos relacionados
- Compartir en redes sociales

✅ **Components**
- `BlogCard`: Tarjeta de artículo con animaciones
- `BlogHero`: Hero section del blog
- `BlogContent`: Renderizado de contenido rico

✅ **Features**
- Static site generation (SSG)
- SEO optimizado con JSON-LD
- Responsive design
- Animaciones con Framer Motion
- Búsqueda y filtros

## 6. Próximos pasos

1. Configurar Contentful con las credenciales reales
2. Crear el contenido inicial (categorías, tags, autores)
3. Publicar algunos artículos de prueba
4. Probar la funcionalidad completa del blog

## 7. Comandos útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Revalidación de contenido
# El contenido se revalida automáticamente cada 60 segundos
```

## 8. Estructura de archivos

```
/lib/contentful.ts          # API client y tipos
/components/BlogCard.tsx    # Componente de tarjeta de blog
/components/BlogHero.tsx    # Hero section del blog
/components/BlogContent.tsx # Renderizado de contenido
/pages/blog/index.tsx       # Página listado de blog
/pages/blog/[slug].tsx      # Página individual de post
```