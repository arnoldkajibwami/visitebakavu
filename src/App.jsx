import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Destination from "./Destination";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";
import Culturedetails from "./Culturedetails";
import Explore from "./Explore";
import Video from "./Video";
// import Videodetails from "./Videodetails";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/culture" element={<Culturedetails/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
