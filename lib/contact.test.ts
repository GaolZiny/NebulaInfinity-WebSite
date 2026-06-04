import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildContactEmailHtml,
  buildContactEmailText,
  getContactInquiryTypeOptions,
  normalizeContactInquiryType,
  validateContactFormInput,
} from './contact';

test('normalizes Japanese other inquiry label to canonical value', () => {
  assert.equal(normalizeContactInquiryType('まだ整理中 / Other'), 'Still defining / Other');
});

test('returns localized inquiry labels for the contact form', () => {
  const jaOptions = getContactInquiryTypeOptions('ja');
  const enOptions = getContactInquiryTypeOptions('en');

  assert.equal(jaOptions.at(-1)?.label, 'まだ整理中 / Other');
  assert.equal(jaOptions.at(-1)?.value, 'Still defining / Other');
  assert.equal(enOptions.at(-1)?.label, 'Still defining / Other');
});

test('accepts canonicalized inquiry types and validates valid payloads', () => {
  const result = validateContactFormInput({
    name: 'Test User',
    company: 'Nebula Infinity',
    email: 'test@example.com',
    phone: '03-1234-5678',
    inquiryType: 'まだ整理中 / Other',
    message: 'We want help deciding the right starting point for this project.',
    lang: 'ja',
    website: '',
  });

  assert.equal(result.isValid, true);
  assert.equal(result.normalized.inquiryType, 'Still defining / Other');
  assert.deepEqual(result.errors, {});
});

test('rejects invalid payloads with field and form errors', () => {
  const result = validateContactFormInput({
    name: '',
    company: '',
    email: 'bad-email',
    phone: 'abc',
    inquiryType: 'Unknown',
    message: 'Too short',
    lang: 'en',
    website: 'https://spam.example',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.name, 'This field is required');
  assert.equal(result.errors.email, 'Please check the email format');
  assert.equal(result.errors.form, 'Please check the phone number format');
  assert.equal(result.errors.inquiryType, 'Please choose one of the available inquiry types');
  assert.equal(result.errors.message, 'Please share a little more detail');
  assert.equal(result.errors.website, 'Spam detected');
});

test('email builders include normalized contact data', () => {
  const input = {
    name: 'A <User>',
    company: 'Nebula Infinity',
    email: 'user@example.com',
    phone: '',
    inquiryType: 'まだ整理中 / Other',
    message: 'Line one\nLine two with <b>markup</b>.',
    lang: 'ja' as const,
    website: '',
  };

  const text = buildContactEmailText(input);
  const html = buildContactEmailHtml(input);

  assert.match(text, /Still defining \/ Other/);
  assert.match(text, /Line one\nLine two with <b>markup<\/b>\./);
  assert.match(html, /Still defining \/ Other/);
  assert.match(html, /Line one<br \/>Line two with &lt;b&gt;markup&lt;\/b&gt;\./);
});
