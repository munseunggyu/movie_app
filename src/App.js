import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from "./Movie";
import "./App.css";


function App() {
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
      <section className="constainer">
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
                  poster={movie.medium_cover_image} />
                })
              }
            </div>
        }
      </section>
    </div>
  );
}

// class App extends React.Component{
//   constructor(p){
//     super(p)
//     console.log('hi')
//   }
//   state = {
//     count: 0
//   };
//   add = ()=>{
//     this.setState( current => ({count: current.count + 1}))
//   }
//   componentDidMount(){
//     console.log('com')
//   }
//   render(){
//     console.log('mes')
//     return(
//         <div>
//           This number is {this.state.count}
//           <button onClick={this.add} >plus</button>
//         </div>
//       )
//   }
// }


export default App;
