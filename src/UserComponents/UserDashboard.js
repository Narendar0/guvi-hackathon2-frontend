import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
function UserDashboard() {

    const [theaterList, setTheaterList] = useState([])
    useEffect(async () => {
        try {
            let dashboard = await axios.get("http://localhost:3000/userdashboard", {
                headers: {
                    Authorization: window.localStorage.getItem("my_token")
                }
            })
            console.log(dashboard.data.authorization)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchTheaters()
    }, [])


    let fetchTheaters = async () => {
        try {
            let allTheaters = await axios.get("http://localhost:3000/theaters")
            setTheaterList(allTheaters.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div id="wrapper">
                {/* SideBar */}
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <div class="sidebar-brand d-flex align-items-center justify-content-center">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-ticket"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">Ticket Booking App</div>
                    </div>



                    <li class="nav-item">
                        <Link class="nav-link collapsed" to={"/userdashboard"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                             <i class="fas fa-fw fa-film"></i>
                            <span>Theater List</span>
                        </Link>
                    </li>


                    <li class="nav-item">
                        <Link class="nav-link collapsed" to={"/usermovielist"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-film"></i>
                            <span>Movie List</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-sign-out"></i>
                            <span>Logout</span>
                        </Link>
                    </li>




                </ul>

                {/* Dashboard content*/}
                <div id="content-wrapper" class="d-flex flex-column"  >
                    <div id="content">

                        <div class="d-sm-flex justify-content-center mb-4" style={{background : "#4e73df", padding:"20px"}}>
                            <h1 class="h3 mb-0" style={{color:"white" }}>Available Theaters</h1>
                        </div>


                        <div class="row">

                            <h2 className='ml-3'>Select Theater</h2>
                            <section id="gallery">
                                <div class="container mt-4">
                                    <div class="row">
                                        {
                                            theaterList.map((theater) => {
                                                return <div class="col-lg-4 mb-4">
                                                    <div class="card">
                                                        <div class="card-body" style={{ textAlign: "center" }}>
                                                        <h6>Theater name</h6>
                                                            <Link to={"/usermovielist"}>
                                                               <h3 class="card-title">{theater.name}</h3>
                                                            </Link>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">Theater Location : {theater.city}</li>
                                                            <li class="list-group-item">No Of Seats : {theater.seates}</li>
                                                            <li class="list-group-item">Contact : {theater.phone}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard