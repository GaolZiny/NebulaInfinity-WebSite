'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/ja/');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        color: '#888',
      }}
    >
      <p>Redirecting…</p>
    </div>
  );
}
