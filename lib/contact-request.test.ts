import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildContactCorsHeaders,
  getContactRequestOrigin,
  isContactRequestOriginAllowed,
  parseAllowedContactOrigins,
} from './contact-request';

test('uses production domains as the default contact origin allowlist', () => {
  assert.deepEqual(parseAllowedContactOrigins(), [
    'https://www.nebulainfinity.com',
    'https://nebulainfinity.com',
  ]);
});

test('normalizes configured contact origins and removes duplicates', () => {
  assert.deepEqual(
    parseAllowedContactOrigins(
      'https://preview.nebulainfinity.com, http://localhost:3000, not-a-url, https://preview.nebulainfinity.com',
    ),
    ['https://preview.nebulainfinity.com', 'http://localhost:3000'],
  );
});

test('prefers the Origin header when resolving the contact request origin', () => {
  const request = new Request('https://www.nebulainfinity.com/api/contact', {
    headers: {
      origin: 'https://www.nebulainfinity.com',
      referer: 'https://example.com/contact',
    },
  });

  assert.equal(getContactRequestOrigin(request), 'https://www.nebulainfinity.com');
});

test('falls back to the Referer origin when the Origin header is missing', () => {
  const request = new Request('https://www.nebulainfinity.com/api/contact', {
    headers: {
      referer: 'https://www.nebulainfinity.com/ja/contact?inquiry=AI%20Workflow',
    },
  });

  assert.equal(getContactRequestOrigin(request), 'https://www.nebulainfinity.com');
});

test('rejects requests that do not come from an allowed origin', () => {
  const request = new Request('https://www.nebulainfinity.com/api/contact', {
    headers: {
      origin: 'https://spam.example',
    },
  });

  assert.deepEqual(
    isContactRequestOriginAllowed(request, parseAllowedContactOrigins()),
    {
      requestOrigin: 'https://spam.example',
      isAllowed: false,
    },
  );
});

test('only exposes CORS allow-origin for approved origins', () => {
  const allowedOrigins = parseAllowedContactOrigins();

  assert.equal(
    buildContactCorsHeaders('https://www.nebulainfinity.com', allowedOrigins)['Access-Control-Allow-Origin'],
    'https://www.nebulainfinity.com',
  );
  assert.equal(
    buildContactCorsHeaders('https://spam.example', allowedOrigins)['Access-Control-Allow-Origin'],
    undefined,
  );
});
