'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SessionProvider session={null}>{children}</SessionProvider>
    </div>
  );
}

export default Providers;
