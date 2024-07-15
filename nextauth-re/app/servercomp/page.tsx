import React from 'react';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH } from '../lib/auth';

async function page() {
  const session = await getServerSession(NEXT_AUTH);
  return <div>{JSON.stringify(session)}</div>;
}

export default page;
