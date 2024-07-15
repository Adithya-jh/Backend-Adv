import React from 'react';
import { getServerSession } from 'next-auth';

async function page() {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
}

export default page;
