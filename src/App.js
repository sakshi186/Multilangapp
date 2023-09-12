import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
     <>
          <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navbar/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
   </BrowserRouter>

     </>
  );
}

export default App;
