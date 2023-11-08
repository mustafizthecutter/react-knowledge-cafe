import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleToBookMark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`blogs.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            <h3 className='text-4xl'>Blogs {blogs.length}</h3>
            {
                blogs && blogs.map(blog => <Blog handleToBookMark={handleToBookMark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleToBookMark: PropTypes.func
}

export default Blogs;