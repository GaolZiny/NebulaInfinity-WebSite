export const CONTACT_INQUIRY_TYPES = [
  'AI Workflow Design & Development',
  'AI Application Design & Development',
  'AI-Driven Development',
  'Still defining / Other',
] as const;

export type ContactInquiryType = (typeof CONTACT_INQUIRY_TYPES)[number];
export type ContactLanguage = 'ja' | 'en';

export interface ContactFormInput {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  lang: ContactLanguage;
  website?: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<'name' | 'email' | 'inquiryType' | 'message' | 'website' | 'form', string>>;
  normalized: ContactFormInput;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-\s]{6,30}$/;
const OTHER_INQUIRY_JA_LABEL = 'まだ整理中 / Other';

const CONTACT_INQUIRY_TYPE_ALIASES: Record<string, ContactInquiryType> = {
  'AI Workflow Design & Development': 'AI Workflow Design & Development',
  'AI Application Design & Development': 'AI Application Design & Development',
  'AI-Driven Development': 'AI-Driven Development',
  'AI-Driven Development Solution': 'AI-Driven Development',
  'AI-Driven Development Design & Development': 'AI-Driven Development',
  'Still defining / Other': 'Still defining / Other',
  [OTHER_INQUIRY_JA_LABEL]: 'Still defining / Other',
};

export function getContactInquiryTypeOptions(lang: ContactLanguage) {
  return CONTACT_INQUIRY_TYPES.map((value) => ({
    value,
    label: lang === 'ja' && value === 'Still defining / Other' ? OTHER_INQUIRY_JA_LABEL : value,
  }));
}

export function normalizeContactInquiryType(value: string): string {
  const trimmed = value.trim();
  return CONTACT_INQUIRY_TYPE_ALIASES[trimmed] ?? trimmed;
}

export function normalizeContactFormInput(input: ContactFormInput): ContactFormInput {
  return {
    name: input.name.trim(),
    company: input.company?.trim() ?? '',
    email: input.email.trim(),
    phone: input.phone?.trim() ?? '',
    inquiryType: normalizeContactInquiryType(input.inquiryType),
    message: input.message.trim(),
    lang: input.lang === 'en' ? 'en' : 'ja',
    website: input.website?.trim() ?? '',
  };
}

export function validateContactFormInput(input: ContactFormInput): ContactValidationResult {
  const normalized = normalizeContactFormInput(input);
  const errors: ContactValidationResult['errors'] = {};

  if (!normalized.name) {
    errors.name = 'This field is required';
  } else if (normalized.name.length > 120) {
    errors.name = 'Please keep this under 120 characters';
  }

  if (!normalized.email) {
    errors.email = 'This field is required';
  } else if (!EMAIL_PATTERN.test(normalized.email)) {
    errors.email = 'Please check the email format';
  } else if (normalized.email.length > 160) {
    errors.email = 'Please keep this under 160 characters';
  }

  if (normalized.phone && !PHONE_PATTERN.test(normalized.phone)) {
    errors.form = 'Please check the phone number format';
  }

  if (!normalized.inquiryType) {
    errors.inquiryType = 'This field is required';
  } else if (!CONTACT_INQUIRY_TYPES.includes(normalized.inquiryType as ContactInquiryType)) {
    errors.inquiryType = 'Please choose one of the available inquiry types';
  }

  if (!normalized.message) {
    errors.message = 'This field is required';
  } else if (normalized.message.length < 20) {
    errors.message = 'Please share a little more detail';
  } else if (normalized.message.length > 5000) {
    errors.message = 'Please keep this under 5000 characters';
  }

  if (normalized.website) {
    errors.website = 'Spam detected';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalized,
  };
}

export function toLocalizedValidationErrors(
  errors: ContactValidationResult['errors'],
  lang: ContactLanguage,
): ContactValidationResult['errors'] {
  if (lang === 'en') {
    return errors;
  }

  const messages: Record<string, string> = {
    'This field is required': '必須項目です',
    'Please check the email format': 'メールアドレスの形式をご確認ください',
    'Please check the phone number format': '電話番号の形式をご確認ください',
    'Please choose one of the available inquiry types': '選択肢からお問い合わせ種別を選択してください',
    'Please share a little more detail': 'ご相談内容をもう少し詳しくご記入ください',
    'Please keep this under 120 characters': '120文字以内で入力してください',
    'Please keep this under 160 characters': '160文字以内で入力してください',
    'Please keep this under 5000 characters': '5000文字以内で入力してください',
    'Spam detected': '不正な送信が検出されました',
  };

  return Object.fromEntries(
    Object.entries(errors).map(([key, value]) => [key, messages[value] ?? value]),
  ) as ContactValidationResult['errors'];
}

export function buildContactEmailText(input: ContactFormInput): string {
  const data = normalizeContactFormInput(input);

  return [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '新しいお問い合わせ / New Contact Form Submission',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `お名前 / Name: ${data.name}`,
    `会社名 / Company: ${data.company || 'N/A'}`,
    `メール / Email: ${data.email}`,
    `電話番号 / Phone: ${data.phone || 'N/A'}`,
    `お問い合わせ種類 / Inquiry Type: ${data.inquiryType}`,
    '',
    'お問い合わせ内容 / Message:',
    data.message,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `送信時刻 / Submitted: ${new Date().toISOString()}`,
    `言語 / Language: ${data.lang}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  ].join('\n');
}

export function buildContactEmailHtml(input: ContactFormInput): string {
  const data = normalizeContactFormInput(input);
  const escape = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\n/g, '<br />');

  return `
    <div style="font-family: Arial, 'Noto Sans JP', sans-serif; color: #020617; line-height: 1.7;">
      <h2 style="margin: 0 0 16px; color: #0f172a;">新しいお問い合わせ / New Contact Form Submission</h2>
      <p><strong>お名前 / Name:</strong> ${escape(data.name)}</p>
      <p><strong>会社名 / Company:</strong> ${escape(data.company || 'N/A')}</p>
      <p><strong>メール / Email:</strong> ${escape(data.email)}</p>
      <p><strong>電話番号 / Phone:</strong> ${escape(data.phone || 'N/A')}</p>
      <p><strong>お問い合わせ種類 / Inquiry Type:</strong> ${escape(data.inquiryType)}</p>
      <p><strong>お問い合わせ内容 / Message:</strong><br />${escape(data.message)}</p>
      <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 24px 0;" />
      <p><strong>送信時刻 / Submitted:</strong> ${new Date().toISOString()}</p>
      <p><strong>言語 / Language:</strong> ${escape(data.lang)}</p>
    </div>
  `.trim();
}
