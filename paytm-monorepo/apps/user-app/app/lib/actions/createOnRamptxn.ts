'use server';
import { getServerSession } from 'next-auth';

import { authOptions } from '../auth';
import prisma from '@repo/db/client';

export async function createOnRamptxn(amount: number, provider: string) {
  const session = await getServerSession(authOptions);

  const token = Math.random().toString();
  //@ts-ignore
  const userId = session?.user?.id;
  if (!userId) {
    return {
      message: 'user not logged in',
    };
  }
  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount * 100,
      status: 'Processing',
      startTime: new Date(),
      provider,
      token: token,
    },
  });

  return {
    message: 'onramp transaction added',
  };
}
