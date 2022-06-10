import './App.css';
import Home from './components/pages/Home/Home';
import Footer from './components/sharedPages/Footer';
import NavBar from './components/sharedPages/NavBar';
import { Routes, Route } from "react-router-dom";
import Blog from './components/pages/Home/Blog';
import Banner from './components/pages/Home/Banner';
import AboutMe from './components/pages/Home/AboutMe';
import Portfolio from './components/pages/Home/Portfolio/Portfolio';
import ContactMe from './components/pages/Home/ContactMe';
import Services from './components/pages/Home/Services/Services';

function App() {
  return (
    <div>
     
     
  
      <div className="max-w-7xl p-10 mx-auto scroll-smooth">
      <div className='sticky top-0 z-50'>
        <NavBar></NavBar>
      </div>
      </div>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/about' element={<AboutMe></AboutMe>}></Route>
         <Route path='/project' element={<Services></Services>}></Route>
         <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
         <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
