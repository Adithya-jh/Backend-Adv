'use client';
import { signup } from '@/actions/user';
import axios from 'axios';
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[50%] mr-[40px]">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-[300px] mb-[10px] p-[10px] rounded-md outline-none text-black"
            type="text"
            placeholder="username"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-[300px] mb-[10px] p-[10px] rounded-md outline-none text-black"
            type="password"
            placeholder="password"
          ></input>
          <button
            onClick={() => {
              signup(email, password);
            }}
            className="p-[10px] border-dashed border-red-400 ml-[100px] mt-[30px]"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
