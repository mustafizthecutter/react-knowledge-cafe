import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <h3 className='text-4xl'>Blogs</h3>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;