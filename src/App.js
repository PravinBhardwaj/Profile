
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProfileHome from './component/ProfileHome';
import Contact from './component/Contact';
import Education from './component/Education';
import AboutMe from './component/AboutMe';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <ProfileHome />
    //     <AboutMe/>
    //     <Education/>
    //     <Contact/>
    //   </div>
    // </Router>

    <>
    <BrowserRouter>
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<ProfileHome/>}/>
      <Route path='AboutMe' element={<AboutMe/>}/>
      <Route path='Education' element={<Education/>}/>
      <Route path='Contact' element={<Contact/>}/>
      
     

      <Route path='*' element={<h1>Page Not Found</h1>}/>
     </Routes>
      
     </BrowserRouter>
    </>
  );
}

export default App;

