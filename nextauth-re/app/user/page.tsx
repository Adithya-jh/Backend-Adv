'use client';
import React from 'react';

import { useSession } from 'next-auth/react';

function User() {
  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
}

export default User;
