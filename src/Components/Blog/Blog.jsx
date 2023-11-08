import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleToBookMark }) => {
    const { title, cover, author, author_img, posted_date, hashtags, reading_time } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="h3 text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min reads</span>
                    <button onClick={() => handleToBookMark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl mb-4'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, id) => <span key={id}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;