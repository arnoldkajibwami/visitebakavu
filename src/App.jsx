import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Destination from "./Destination";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
