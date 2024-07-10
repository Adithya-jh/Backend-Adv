'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    axios
      .get(
        'https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details'
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <main>
      <div>
        {data.name}
        {data.email}
      </div>
    </main>
  );
}
