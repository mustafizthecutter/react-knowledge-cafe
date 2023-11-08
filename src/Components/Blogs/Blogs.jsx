import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleToBookMark, handleReadingTime }) => {
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
                blogs && blogs.map(blog => <Blog handleReadingTime={handleReadingTime} handleToBookMark={handleToBookMark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleToBookMark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;