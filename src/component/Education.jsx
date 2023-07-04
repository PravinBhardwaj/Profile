import React, { useState } from 'react'

const Education = () => {

    const [open, Setopen]=useState(false);

    const projectOpen=(projectName)=> {
        Setopen(true);
        switch (projectName) {
            case 'HTML & CSS PROJECT':
              window.open('https://pravinbhardwaj.github.io/html/');
              break;
            case 'BOOTSTRAP PROJECT':
              window.open('https://pravinbhardwaj.github.io/Bootstrap-Project/');
              break;
            case 'JAVASCRIPT PROJECT':
              window.open('https://pravinbhardwaj.github.io/Dynamicform-javascript/');
              break;
            case 'REACT PROJECT':
              window.open('https://pravinbhardwaj.github.io/BFC-REACT-PROJECT/');
              break;
            case 'JAVA PROJECT':
              window.open('https://github.com/PravinBhardwaj/ATM-Management-CoreJava.git');
              break;
            default:
              break;
    }}
    return(
        <>
        <div className='Portfolio'>
        <h1 className='myh1'>MY <span className='portspan'>PORTFOLIO</span></h1>
        <div className='workdivs'>
            <div className='Htmlbox' onClick={() => projectOpen('HTML & CSS PROJECT')}>
                <div className='HTml_project'></div>
                <p className='Html_project_text'>HTML & CSS PROJECT</p>
            </div>
            <div className='Bootstrapbox' onClick={() => projectOpen('BOOTSTRAP PROJECT')}>
                <div className='Bootsrap_project'></div>
                <p className='Bootsrap_project_text'>BOOTSTRAP PROJECT</p>
            </div>
            <div className='Javascriptbox' onClick={() => projectOpen('JAVASCRIPT PROJECT')}>
                <div className='javascript-project'></div>
                <p className='javascript-project_text'>JAVASCRIPT PROJECT</p>
            </div>
            <div className='Reactbox' onClick={() => projectOpen('REACT PROJECT')}>
                <div className='REAct_project'></div>
                <p className='REAct_project_text'>REACT PROJECT</p>
            </div>
            <div className='Javabox' onClick={() => projectOpen('JAVA PROJECT')}>
                <div className='Java_project'></div>
                <p className='Java_project_text'>JAVA PROJECT</p>
            </div>
           
           
           
           
           
        </div>
    </div>
        </>
    )
}

export default Education