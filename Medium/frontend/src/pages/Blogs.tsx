import React from 'react';
import BlogCard from '../components/BlogCard';
import Appbar from '../components/Appbar';
import { useBlogs } from '../hooks';

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || 'JHA'}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd July"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
