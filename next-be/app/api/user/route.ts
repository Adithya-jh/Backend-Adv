import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  return NextResponse.json({
    name: 'JHA',
    email: 'jha@gmail.com',
  });
}

export async function POST(req: NextRequest) {
  //body
  const body = await req.json();
  //headers
  console.log(req.headers.get('authorization'));
  //query params
  console.log(req.nextUrl.searchParams.get('name'));

  //hit the db with body
  return NextResponse.json({
    body,
  });
}
