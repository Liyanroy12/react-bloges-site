import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] =useState([]);

  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const handleAddToRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the item 
    // console.log("remove book marks",id);
    const remainingBoomarks = bookmarks. filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBoomarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between gap-4 max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleAddToRead={handleAddToRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
