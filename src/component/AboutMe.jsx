import React from 'react'
import {FaCloudDownloadAlt ,FaBriefcase } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const AboutMe = () => {
    return(
        <>
         <div className="aboutmemain">
        <h1 className='aboutname'>ABOUT <span className='me'>ME</span></h1>
        <section className="maininfo-content">
            <div className="container">
                <div className="personaldetails">
                    <div className="personalinfo">
                        <h3 className='persoh3'>PERSONAL INFOS</h3>
                        <div className='personaldivflex'>
                        <ul className='personal1'>
                            <li>
                                <span className="title">First Name:</span>
                                <span className="name">Pravin</span>
                            </li>
                           
                            <li>
                                <span className="title">Age:</span>
                                <span className="name">25</span>
                            </li>
                           
                            <li>
                                <span className="title">Phone:</span>
                                <span className="name">7039707737</span>
                            </li>
                           
                            <li>
                                <span className="title">Languages:</span>
                                <span className="name">Hindi,English</span>
                            </li>
                           
                        </ul>
                        <ul className='personal2'>
                            <li>
                                <span className="title">Last Name:</span>
                                <span className="name">Suthar</span>
                            </li>
                            <li>
                                <span className="title">Address:</span>
                                <span className="name">Mumbai</span>
                            </li>  
                            <li>
                                <span className="title">Email:</span>
                                <span className="name">pravinsuthar312@gmail.com</span>
                            </li>  
                            <li>
                                <span className="title">Freelance:</span>
                                <span className="freelance">Available</span>
                            </li>
                        </ul>
                        </div>
                      
                        <div className='btndiv'>
            <button className="moreaboutmebtn">DOWNLOAD CV</button>
            <div className='btnicon'><FaCloudDownloadAlt style={{color:'white',backgroundColor:'rgb(255,180,0)', marginTop:'5px'}}/></div>
            </div>
                    </div>
                    <div className="education">
                    <h3 className='exp'>EXPERIENCE & EDUCATION</h3>
                    <div className='EXPERIENCE_EDUCATION'>
                        <div className='edu'>
                            <div className='course'>
                                <ul>
                                    <li>
                                        <div className='edutext'>
                                            <p style={{fontSize:'14px'}}>JAVA FULLSTACK DEVELOPER</p>
                                            <p style={{fontSize:'12px'}}>TRYCATCH CLASSES-2023</p>
                                        </div>
                                    </li>
                                    <li>
                                    
                                        <div  className='edutext'>
                                        <p style={{fontSize:'14px'}}>PG DIPLOMA IN FOOD NUTRITION</p>
                                        <p style={{fontSize:'12px'}}>NSI MUMBAI</p>
                                        </div>
                                        
                                      
                                    </li>
                                    <li>
                                       
                                    <div  className='edutext'>
                                    <p style={{fontSize:'14px'}}>BSc</p>
                                    <p style={{fontSize:'12px'}}>MUMBAI UNIVERSITY</p>
                                    </div>
                                       
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </div>
                
                <div className="skills">
                        <h3 className='myskill'>MY SKILLS</h3>
                        {/* <div className="skillbox">
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate"  color="warning"  value={85} />
                            </Stack>
                            <p>HTML/CSS</p>
                            </div>
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate" color="warning" value={80} />
                            </Stack>
                            <p>Bootstrap</p>
                            </div>
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate" color="warning" value={70} />
                            </Stack>
                            <p>Javascript</p>
                            </div>
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate" color="warning" value={65} />
                            </Stack>
                            <p>React</p>
                            </div>
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate" color="warning" value={75} />
                            </Stack>
                            <p>Core Java</p>
                            </div>
                            <div className='skillpoint'>
                            <Stack spacing={2} direction="row">
                                 <CircularProgress variant="determinate" color="warning" value={75} />
                            </Stack>
                            <p>Advance Java</p>
                            </div>
                        </div> */}
                <div className='skillflex'>
                    <div className='circle'>
                        <div className='round'>
                            <p></p>
                        </div>
                        <div className='percent'>
                            <p>75%</p>
                        </div>
                        <div className='text'>
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='round-2'>
                            <p></p>
                        </div>
                        <div className='percent-2'>
                            <p>80%</p>
                        </div>
                        <div className='text'>
                            <p>BOOTSTRAP</p>
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='round-3'>
                            <p></p>
                        </div>
                        <div className='percent-3'>
                            <p>70%</p>
                        </div>
                        <div className='text'>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='round-4'>
                            <p></p>
                        </div>
                        <div className='percent-4'>
                            <p>65%</p>
                        </div>
                        <div className='text'>
                            <p>REACT</p>
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='round-5'>
                            <p></p>
                        </div>
                        <div className='percent-5'>
                            <p>78%</p>
                        </div>
                        <div className='text'>
                            <p>CORE JAVA</p>
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='round-6'>
                            <p></p>
                        </div>
                        <div className='percent-6'>
                            <p>60%</p>
                        </div>
                        <div className='text'>
                            <p>SPRINGBOOT</p>
                        </div>
                    </div>
                </div>        
                    </div>
            </div>
        </section>
    </div>
        </>
    )
}

export default AboutMe