import {
  buildContactEmailHtml,
  buildContactEmailText,
  toLocalizedValidationErrors,
  validateContactFormInput,
  type ContactFormInput,
} from '../../lib/contact';

interface Env {
  SENDGRID_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

async function sendViaSendGrid(env: Env, formData: ContactFormInput) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: env.CONTACT_TO_EMAIL }],
          subject: `[Nebula Infinity] ${formData.inquiryType}`,
        },
      ],
      from: { email: env.CONTACT_FROM_EMAIL, name: 'Nebula Infinity Website' },
      reply_to: { email: formData.email, name: formData.name },
      content: [
        {
          type: 'text/plain',
          value: buildContactEmailText(formData),
        },
        {
          type: 'text/html',
          value: buildContactEmailHtml(formData),
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SendGrid delivery failed (${response.status}): ${errorText}`);
  }
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  let payload: ContactFormInput;

  try {
    payload = (await context.request.json()) as ContactFormInput;
  } catch {
    return json({ error: 'invalid_json', message: 'Invalid request body' }, 400);
  }

  const validation = validateContactFormInput(payload);

  if (!validation.isValid) {
    return json(
      {
        error: 'validation_failed',
        message: 'Please check the form fields.',
        fieldErrors: toLocalizedValidationErrors(validation.errors, validation.normalized.lang),
      },
      400,
    );
  }

  if (
    !context.env.SENDGRID_API_KEY ||
    !context.env.CONTACT_TO_EMAIL ||
    !context.env.CONTACT_FROM_EMAIL
  ) {
    return json(
      {
        error: 'provider_not_configured',
        message:
          validation.normalized.lang === 'ja'
            ? 'お問い合わせフォームは現在利用できません。info@nebulainfinity.com まで直接ご連絡ください。'
            : 'The contact form is temporarily unavailable. Please email info@nebulainfinity.com directly.',
      },
      503,
    );
  }

  try {
    await sendViaSendGrid(context.env, validation.normalized);
    return json({ success: true, message: 'Inquiry delivered successfully.' });
  } catch (error) {
    console.error('Contact delivery failed:', error);
    return json(
      {
        error: 'delivery_failed',
        message:
          validation.normalized.lang === 'ja'
            ? '送信には失敗しました。info@nebulainfinity.com まで直接ご連絡ください。'
            : 'We could not send the form. Please contact info@nebulainfinity.com directly.',
      },
      502,
    );
  }
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
