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
import KauziBiega from "./KauziBiega";
import Moreculture from "./Moreculture";
import Mappage from "./Mappage";
import ReactGA from "react-ga4";

ReactGA.initialize("your GA measurement id");

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/kauzi" element={<KauziBiega />} />
        <Route path="/about" element={<About/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/Moreculture" element={<Moreculture/>} />
        <Route path="/map" element={<Mappage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/culture" element={<Blog/>} />
        <Route path="/culture" element={<Culturedetails/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
