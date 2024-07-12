import React from 'react';
import { Link } from 'react-router-dom';

import { blogs } from '../../sampleContent';

const BlogList = () => {
    console.log(blogs);
    return (
        <div className='wrapper'>
            <h1>BlogList page</h1>
            {blogs.map(blog => 
                <Link key={blog.id} to={`/blogs/${blog.id}`}>
                    <h3>{blog.name}</h3>
                </Link>
            )}
        </div>
    )
};

export default BlogList;