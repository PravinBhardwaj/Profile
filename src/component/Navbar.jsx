import React, { useState } from 'react';
import { FaBriefcase, FaHome, FaUser, FaEnvelopeOpen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './profilehome.css'

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleToggleClick = () => {
      setIsActive(!isActive);
    };
  

   
    return (
      <>
        <div className={`navigation ${isActive ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                <span className="icon"><FaHome style={{marginBottom:'5px'}}/></span>
                {/* <span className="title">HOME</span> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutMe" activeClassName="active">
                <span className="icon"><FaUser style={{marginBottom:'5px'}}/></span>
                {/* <span className="title">PROFILE</span> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Education" activeClassName="active">
                <span className="icon"><FaBriefcase style={{marginBottom:'5px'}}/></span>
                {/* <span className="title" >EDUCATION</span> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active">
                <span className="icon"><FaEnvelopeOpen style={{marginBottom:'5px'}}/></span>
                {/* <span className="title">CONTACT</span> */}
              </NavLink>
            </li>
          </ul>
         
        </div>
      
      </>
    );
  }

export default Navbar