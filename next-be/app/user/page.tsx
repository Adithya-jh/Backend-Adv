import axios from 'axios';
import Image from 'next/image';
import client from '@/db';

async function fetchData() {
  // const res = await axios.get<any, any>('http://localhost:3000/api/user');
  const user = await client.user.findFirst();

  //   console.log(JSON.stringify(res.data));
  return {
    email: user?.email,
    name: 'jha',
  };
}

export default async function Home() {
  const res = await fetchData();

  return <div>{res.email}</div>;
}
