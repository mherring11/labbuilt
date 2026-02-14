import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { data } = await req.json();

    // Send email notification using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    const emailBody = {
      from: 'The Lab <onboarding@resend.dev>',
      to: ['support@labbuilt210.com'],
      subject: `New Contact Form Submission from ${data.full_name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Preferred Start Date:</strong> ${data.preferred_start_date || 'Not specified'}</p>
        <p><strong>Service Type:</strong> ${data.service_type}</p>
        <p><strong>Goals:</strong></p>
        <p>${data.goals || 'Not provided'}</p>
        <hr>
        <p><em>Please follow up within 24 hours.</em></p>
      `
    };

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailBody)
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email notification error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});