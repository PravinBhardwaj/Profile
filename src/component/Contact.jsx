// import { useState } from "react";
import React,{useState} from 'react'
import {FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


    const handleSendMessage = () => {
        
        window.location.href = 'mailto:pravinsuthar312@gmail.com';

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      };
    return(
        <>
        <div className='Contact'>
            <h1 className='getin'>GET IN<span className='touch'>TOUCH</span></h1>
            <div className='inputbox'>
            <input 
            type='text'
            placeholder='YOUR NAME'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
             <input
            type='mail'
            placeholder='YOUR EMAIL'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />    
            <input
              type='text'
              placeholder='YOUR SUBJECT'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            </div>
        
        <textarea
            placeholder='YOUR MESSAGE'
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <div className='btndiv'>
            <button className="moreaboutmebtn" onClick={handleSendMessage}>SEND MESSAGE</button>
            <div className='btnicon'><FaPaperPlane style={{color:'white',backgroundColor:'rgb(255,180,0)', marginTop:'5px',marginBottom:'10px'}}/></div>
            </div>
    </div>

        </>
    )
}

export default Contact