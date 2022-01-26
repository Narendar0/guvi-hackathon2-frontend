import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ticket from "./images/ticket.jpg"
function UserMoviesList() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
      fetchMovies()
  }, [])


  let fetchMovies = async () => {
      try {
          let allMovies = await axios.get("http://guvi-hackathon2-backend2.herokuapp.com/movies")
          setMovieList(allMovies.data)
      } catch (error) {
          console.log(error)
      }
  }

    return (
        <>
           
           <Link to={"/userdashboard"} className='btn btn-outline-primary' style={{position: "absolute", top:"20px", left:"10px"}}>Go Back</Link>
           
   <section id="movielist" class="jumbotron text-center">
       <img src={ticket} alt='ticket img'/>
     <h1 class="display-3 font-weight-normal">Movie Collections</h1>
     <p class="lead font-weight-normal">Book your Favourite Movies and Enjoy Watching!</p>
</section> 

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
              <Link to={"/book-ticket"}><p class="btn btn-danger">Book Ticket Now</p></Link>
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

export default UserMoviesList