import React from 'react'
import Navbar from './Navbar'
import image from './Snip.png'
const About = () => {
  return (

    <>
      <Navbar/>
      <div className='container'>
        <div className="card" style={{width: "80vw",height:'70vh'}}>
          <img src={image} className="card-img-top" alt="..." style={{borderRadius:"5px",border:"2px solid black",boxShadow:"5px 5px 5px black"}}/>
            <div className="card-body">
              <p className="card-text">Its the snip of the app i built. It's a basic Todo app that i build using BootStrap and Reactjs.</p>
              <p><strong>For future Scope Backend can be implemented which will use databse to store the data</strong></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
