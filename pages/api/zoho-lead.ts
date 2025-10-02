import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, company, employees, message } = req.body

  // Validate required fields
  if (!name || !email || !phone || !company) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    // Option 1: Zoho CRM Web Forms (Easiest - No API required)
    // Get your web form URL from: Zoho CRM → Setup → Channels → Web Forms
    // Replace the URL below with your actual Zoho web form URL
    const zohoWebFormURL = process.env.ZOHO_WEBFORM_URL || ''

    if (zohoWebFormURL) {
      // Prepare form data with exact field names from Zoho WebForm
      const formData = new URLSearchParams()

      // Required hidden fields from Zoho
      formData.append('xnQsjsdp', '58f20f96ab51d373ca4c3df6f9f3a0fb9cc27ce149ba23c92d6495f2f172918f')
      formData.append('zc_gad', '')
      formData.append('xmIwtLD', '1cea5a4c54ca61ea1cb440e1320ee86b3f0b9915d0bcf586dbf527298cb2a4813880f0fc639fdc3253c3b6693add64b6')
      formData.append('actionType', 'TGVhZHM=')
      formData.append('returnURL', 'null')

      // Required fields (from web form HTML)
      formData.append('Company', company)
      formData.append('Last Name', name)

      // Optional fields
      formData.append('Email', email)
      formData.append('Phone', phone)

      if (employees) {
        formData.append('No of Employees', employees)
      }

      if (message) {
        formData.append('Description', message)
      }

      // Honeypot field (spam prevention)
      formData.append('aG9uZXlwb3Q', '')

      const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      })

      const responseText = await response.text()
      console.log('Zoho response status:', response.status)
      console.log('Zoho response:', responseText)
    }

    // Option 2: Zoho CRM API (More control but requires authentication)
    // Uncomment and configure if you want to use the API instead
    /*
    const zohoAccessToken = process.env.ZOHO_ACCESS_TOKEN
    const zohoAPIURL = 'https://www.zohoapis.com/crm/v2/Leads'

    if (zohoAccessToken) {
      await fetch(zohoAPIURL, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${zohoAccessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              Last_Name: name,
              Email: email,
              Phone: phone,
              Company: company,
              No_of_Employees: employees || '',
              Description: message || '',
              Lead_Source: 'Website',
              Lead_Status: 'Not Contacted'
            }
          ]
        })
      })
    }
    */

    // Also send notification email to your team
    // You can use a service like SendGrid, Resend, or any email service
    // For now, we'll just log it
    console.log('New lead received:', { name, email, phone, company })

    return res.status(200).json({
      message: 'Lead submitted successfully',
      success: true
    })

  } catch (error) {
    console.error('Error submitting lead to Zoho:', error)
    return res.status(500).json({
      message: 'Error submitting lead',
      success: false
    })
  }
}
