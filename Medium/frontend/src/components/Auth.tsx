import React from 'react';
import { Link } from 'react-router-dom';

function Auth() {
// { type }: { type: 'signup' | 'signin' }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className=" text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400">
            Already have an account ?
            <Link to="/signin" className="text-blue-500">
              {' '}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
