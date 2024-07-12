import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../../sampleContent';
import NotFound from '../NotFound';

const Blog = () => {
    const { blogId } = useParams();
    const blog = blogs.find(blog => blog.id === blogId);

   if(!blog) {
    return <NotFound />
   }
   return (
    <div className=''>
        <h1>{blog.name}</h1>
        <p>{blog.content}</p>
    </div>
)
};

export default Blog;