import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route,Link}  from 'react-router-dom' 
function App() {
 return(
  <BrowserRouter>
  <nav>
  <Link to="/">
  Home
  </Link>
<Link to="/add">
Add post
</Link>
<Link to="/about">
About
</Link>
  </nav>
  <Routes>
 <Route path="/" element={<Home/>} />
  <Route path="/add" element={<AddPost/>} />
  <Route path="/about" element={<About/>} />
  <Route path="*" element={<NotFound/>} />
  
 
  
  </Routes>
  </BrowserRouter>
 )
}

export default App
