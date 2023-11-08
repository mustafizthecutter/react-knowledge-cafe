import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-md'>
            <h3 className='text-3xl text-center '>Spent time on read : {readingTime} min</h3>
            <h3 className='text-3xl text-center  '>Bookmarked blogs: {bookmarks.length}</h3>
            {
                bookmarks && bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;