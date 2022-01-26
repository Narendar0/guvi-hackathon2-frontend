import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function AdminDashboard() {
    const [theaterList, setTheaterList] = useState([])
    useEffect(() => {
        fetchTheaters()
    }, [])


    let fetchTheaters = async () => {
        try {
            let allTheaters = await axios.get("https://guvi-hackathon2-backend2.herokuapp.com/theaters")
            setTheaterList(allTheaters.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                await axios.delete(`https://guvi-hackathon2-backend2.herokuapp.com/theaters/${id}`)
                fetchTheaters();
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div id="wrapper">
                {/* SideBar */}
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <a class="sidebar-brand d-flex align-items-center justify-content-center">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-ticket"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3"> Admin Page</div>
                        
                    </a>


                    <hr class="sidebar-divider my-0" />


                    <li class="nav-item active">
                        <div class="nav-link" to="/userdashboard">
                            <i class="fas fa-film"></i>
                            <span>List of Theaters</span></div>

                    </li>


                    <hr class="sidebar-divider" />


                    <li class="nav-item">
                        <Link class="nav-link collapsed" to={"/movielist"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-film"></i>
                            <span>Movie List</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link collapsed" to={"/admin-profile"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-user"></i>
                            <span>Admin Profile</span>
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
                <div id="content-wrapper" class="d-flex flex-column mt-3">
                    <div id="content">

                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray text-dark ml-3">Add / Edit / Delete - Theaters</h1>

                            <Link to={"/add-theater"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mr-4">Add New Theater</Link>
                        </div>

                        <div class="row">
                            <section id="gallery">
                                <div class="container mt-4">
                                    <div class="row">
                                        {
                                            theaterList.map((theater) => {
                                                return <div class="col-lg-4 mb-4">
                                                    <div class="card">
                                                        <div class="card-body" style={{ textAlign: "center" }}>
                                                        <h6>Theater name</h6>
                                                            <Link to={"/movielist"}>
                                                               <h3 class="card-title">{theater.name}</h3>
                                                            </Link>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">Theater Location : {theater.city}</li>
                                                            <li class="list-group-item">No Of Seats : {theater.seates}</li>
                                                            <li class="list-group-item">Contact : {theater.phone}</li>
                                                        </ul>
                                                        <div class="card-body">
                                                            <Link to={`/edit-theater/${theater._id}`}><button className='btn btn-primary mr-3'>Edit</button></Link>
                                                            <button onClick={() => handleDelete(theater._id)} className='btn btn-danger'>Delete</button>
                                                        </div>
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

export default AdminDashboard

