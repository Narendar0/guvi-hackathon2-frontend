import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function MoviesList() {
  const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [])


    let fetchMovies = async () => {
        try {
            let allMovies = await axios.get("https://guvi-hackathon2-backend2.herokuapp.com/movies")
            setMovieList(allMovies.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                await axios.delete(`https://guvi-hackathon2-backend2.herokuapp.com/movies/${id}`)
                fetchMovies();
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
           <nav class="bg-dark navbar-dark">
           <Link to={"/admindashboard"} className='btn btn-primary' >Go Back</Link>
           
  <div class="container">
 
    <h4 class="navbar-brand text-center ">Add / Edit / Delete -<i class="fas fa-fw fa-film"></i> Movies List</h4>
    <Link to={"/add-movie"}>
    <button className='btn btn-primary text-end'>Add New Movie</button>
    </Link>
  </div>
  </nav>
  
<section id="gallery">
  <div class="container mt-4">
    <div class="row">
      {
        movieList.map((movie) =>{
          return <div class="col-lg-4 mb-4">
          <div class="card">
            <img src={`${movie.imgUrl}`} alt="" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Movie Name : {movie.name}</h5>
              <p class="card-text">Genre : {movie.genre}</p>
              <p class="card-text">Rating : {movie.rating}</p>
              <p class="card-text">ReleasedOn : {movie.date}</p>
              <Link to={`/edit-movie/${movie._id}`}>
              <p class="btn btn-success">Edit</p>
              </Link>
            
              <p onClick={() => handleDelete(movie._id)} class="btn btn-danger ml-3">Delete</p>
            </div>
           </div>
          </div>
        })
      }
    
  </div>
</div>
</section>

        </>
    )
}

export default MoviesList