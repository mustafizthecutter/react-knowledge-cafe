import './App.css'
import Header from './Components/Heder/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleToBookMark = blog => {
    setBookmarks([...bookmarks, blog])
  }
  const handleReadingTime = time => {
    setReadingTime(readingTime + time);
  }

  return (

    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleToBookMark={handleToBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}  ></Bookmarks>
      </div>

    </>
  )
}

export default App
