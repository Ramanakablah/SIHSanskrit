import React from 'react'
import "../CSS/Profile.css"
import memb from "../data/member.jpeg"

const profile = () => {
  return (<div className='profile-component-holder'>
    <h1>Team - Members</h1>
    <div className="profile-holder">
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
      <div className="member-profile">
        <img src={memb} alt="" />
        <div className="profile-body">
          <h3>Aaaditya</h3>
          <h5>CSE-A</h5>
          <h5>BPIT, Delhi</h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default profile