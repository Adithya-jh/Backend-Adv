import React from 'react';
import BlogCard from '../components/BlogCard';

function Blogs() {
  return (
    <div className="flex justify-center">
      <div className=" max-w-xl">
        <BlogCard
          id="1"
          authorName={'JHA'}
          title={'bOMB'}
          content={'BOMB BLAST IN KCT'}
          publishedDate={'TODATE'}
        />
        <BlogCard
          id="1"
          authorName={'JHA'}
          title={'bOMB'}
          content={'BOMB BLAST IN KCT'}
          publishedDate={'TODATE'}
        />
        <BlogCard
          id="1"
          authorName={'JHA'}
          title={'bOMB'}
          content={'BOMB BLAST IN KCT'}
          publishedDate={'TODATE'}
        />
        <BlogCard
          id="1"
          authorName={'JHA'}
          title={'bOMB'}
          content={'BOMB BLAST IN KCT'}
          publishedDate={'TODATE'}
        />
      </div>
    </div>
  );
}

export default Blogs;
