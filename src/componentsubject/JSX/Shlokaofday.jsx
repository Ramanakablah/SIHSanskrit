import React from 'react'
import "../CSS/Shloka.css"
import shloka from "../data/shloka.json"

const Shlokaofday = () => {

   

  return (<div className='shloka-component-holder'>
      <div className="shloka-body container">
      <h2> श्लोक</h2>
      <div className="shloka-heading">{shloka.shlok}</div>
      <h3>अर्थात्</h3>
      <div className="shloka-artharth">{shloka.artharth}</div>
      </div>
      <div className="shloka-image">
       <img src="https://new-img.patrika.com/upload/2019/06/21/1_16.jpg" alt="image" />    
      </div>
  </div>
  )
}

export default Shlokaofday