import axios from 'axios';
import Image from 'next/image';

async function fetchData() {
  const res = await axios.get<any, any>(
    'https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details'
  );

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
      hi
    </div>
  );
}
