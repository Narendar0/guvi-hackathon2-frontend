import React from 'react'
import { Link } from 'react-router-dom'
import profile from "./images/profile.jpg"

function AdminProfile() {
    return (
        <>
             <Link to={"/admindashboard"} className='btn btn-primary' style={{position: "absolute", top:"20px", left:"10px"}}>Go Back</Link>
            <h2 className='mb-3' style={{ textAlign: "center", marginTop: "50px" }}>Admin Profile </h2>

            <div class="profile-card">
                <img src={profile} alt="John" style={{ width: "100%" }} />
                <h1 className='mt-4'>Dharani Kumar</h1>
                <p className="profile-title mt-3">Full Stack Developer</p>
                <p className='mt-2'>Guvi Institute Chennai</p>

            </div>


        </>
    )
}

export default AdminProfile