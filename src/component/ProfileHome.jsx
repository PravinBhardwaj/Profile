import React from 'react'
import './profilehome.css'
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
import myimg from './images/pravin.jpg';
const ProfileHome = () => {

   
    return(
        <>
        <div className="mainprofilediv">
            <div className="profilepicture">
                <img src={myimg} alt='' />
            </div>
            <div className="myinformation">
                <h1 className='myinfoh1'><p className="yellowtext">I'M PRAVIN SUTHAR</p>
                    <p className="webdeveloper">WEB DEVELOPER</p>
                </h1>
                <p className="myself">
                I'm a Fullstack Web Developer focused on
      crafting clean & user‑friendly experiences, I am passionate about
      building excellent website that improves the lives of those
      around me.
                </p>
                <div className='btndiv'>
                 <Link to="/Aboutme">
                 <button className="moreaboutmebtn" >MORE ABOUT ME</button>
                    </Link>   
               
                <div className='btnicon'><FaArrowRight style={{color:'white',backgroundColor:'rgb(255,180,0)', marginTop:'5px'}}/></div>
                </div>
                
            </div>
        </div>
        </>
     )
}

export default ProfileHome