import axios from 'axios';
import Image from 'next/image';

async function fetchData() {
  const res = await axios.get<any, any>('http://localhost:3000/api/user');

  //   console.log(JSON.stringify(res.data));
  return res;
}

export default async function Home() {
  const res = await fetchData();
  const data = res.data;
  //   console.log(data);

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
