import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";


function Home() {
  const [isLoding,setLoding] = useState(true)
  let [movies,setMovies] = useState([]) 
   const getMovies = async () => {
    const movie = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    movies = movie.data.data.movies
    setMovies(movies)
  }
  useEffect(() => {
    getMovies()
    setTimeout(() => {
      setLoding(false)
    },1800) 
  },[])

  
  return (
    <div className="App">
      <section className="container">
        {
          isLoding === true
          ? <div className="loder">
              <span className="loder__text">Loding...</span>
            </div>
          : <div className="movies">
              {
                movies.map((movie)=> {
                  return <Movie 
                  key = {movie.id}
                  id={movie.id} 
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres ={movie.genres}/>
                })
              }
            </div>
        }
      </section>
    </div>
  );
}

export default Home;
