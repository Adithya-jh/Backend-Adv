import React from 'react';
import { Avatar } from './BlogCard';

function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">Medium</div>
      <div>
        <Avatar name="JHA" size="big" />
      </div>
    </div>
  );
}

export default Appbar;
