const DEFAULT_ALLOWED_CONTACT_ORIGINS = [
  'https://www.nebulainfinity.com',
  'https://nebulainfinity.com',
] as const;

function toOrigin(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function parseAllowedContactOrigins(rawValue?: string): string[] {
  const configuredOrigins = rawValue
    ?.split(',')
    .map((value) => toOrigin(value.trim()))
    .filter((value): value is string => Boolean(value));

  const origins = configuredOrigins?.length ? configuredOrigins : [...DEFAULT_ALLOWED_CONTACT_ORIGINS];

  return [...new Set(origins)];
}

export function getContactRequestOrigin(request: Pick<Request, 'headers'>): string | null {
  const originHeader = request.headers.get('origin');
  const origin = toOrigin(originHeader);

  if (origin) {
    return origin;
  }

  return toOrigin(request.headers.get('referer'));
}

export function isContactRequestOriginAllowed(
  request: Pick<Request, 'headers'>,
  allowedOrigins: readonly string[],
) {
  const requestOrigin = getContactRequestOrigin(request);

  return {
    requestOrigin,
    isAllowed: requestOrigin !== null && allowedOrigins.includes(requestOrigin),
  };
}

export function buildContactCorsHeaders(
  requestOrigin: string | null,
  allowedOrigins: readonly string[],
): Record<string, string> {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };

  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    headers['Access-Control-Allow-Origin'] = requestOrigin;
  }

  return headers;
}
