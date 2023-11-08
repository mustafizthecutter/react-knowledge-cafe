import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover, author, author_img, posted_date, hashtags, reading_time } = blog;
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="h3 text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min reads</span>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
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