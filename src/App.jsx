import './App.css'
import Header from './Components/Heder/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleToBookMark = blog => {
    console.log('adding soon')
  }

  return (

    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleToBookMark={handleToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
