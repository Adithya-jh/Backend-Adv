'use client';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';

function Appbar() {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export default Appbar;
