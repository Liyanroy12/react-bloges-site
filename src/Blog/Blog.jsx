import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmarks, handleAddToRead}) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags, id} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-5 mb-4 space-y-4'>
                <div className='flex gap-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-5'>{title}</h2>
            <div className='mt-2 flex gap-4 text-gray-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx} >{hash}</span>)
                }
            </div>
            <button onClick={() => handleAddToRead(id, reading_time)} className='mt-2 text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleAddToRead: PropTypes.func,
}

export default Blog;