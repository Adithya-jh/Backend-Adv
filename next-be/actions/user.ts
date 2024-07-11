'use server'; //when we are creating server actions -> we have to mention use server
import client from '@/db';

export async function signup(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
