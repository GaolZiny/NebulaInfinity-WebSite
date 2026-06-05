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

test('returns localized inquiry labels for the active contact taxonomy', () => {
  const jaOptions = getContactInquiryTypeOptions('ja');
  const enOptions = getContactInquiryTypeOptions('en');
  const optionValues = jaOptions.map((option) => option.value);

  assert.deepEqual(optionValues, [
    'AI Workflow Design & Development',
    'AI Application Design & Development',
    'AI-Driven Development',
    'Still defining / Other',
  ]);
  assert.equal(jaOptions.at(-1)?.label, 'まだ整理中 / Other');
  assert.equal(jaOptions.at(-1)?.value, 'Still defining / Other');
  assert.equal(enOptions.at(-1)?.label, 'Still defining / Other');
  assert.equal(optionValues.some((value) => value.includes('Blockchain Application')), false);
});

test('normalizes AI-Driven Development inquiry type to the active canonical value', () => {
  assert.equal(normalizeContactInquiryType(' AI-Driven Development '), 'AI-Driven Development');
  assert.equal(normalizeContactInquiryType('AI-Driven Development Solution'), 'AI-Driven Development');
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

test('supports AI-Driven Development inquiry and excludes retired Web3 option', () => {
  const enOptions = getContactInquiryTypeOptions('en');

  assert.ok(enOptions.some((option) => option.value === 'AI-Driven Development'));
  assert.ok(!enOptions.some((option) => option.value.includes('Web3.0') || option.label.includes('Web3.0')));

  const result = validateContactFormInput({
    name: 'Test User',
    company: 'Nebula Infinity',
    email: 'test@example.com',
    phone: '',
    inquiryType: 'AI-Driven Development',
    message: 'We want to discuss an AI-driven development workflow and quality gates.',
    lang: 'en',
    website: '',
  });

  assert.equal(result.isValid, true);
  assert.equal(result.normalized.inquiryType, 'AI-Driven Development');
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
