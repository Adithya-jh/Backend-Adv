import { NextRequest, NextResponse } from 'next/server';

import client from '@/db';

export async function POST(req: NextRequest) {
  //body
  const body = await req.json();

  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    return NextResponse.json({
      body,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: 'Error while signing up',
      },
      {
        status: 411,
      }
    );
  }

  //hit the db with body
}
