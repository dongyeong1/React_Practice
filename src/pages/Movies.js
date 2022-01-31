import React,{useState} from "react";
import MovieForm from "../components/MovieForm";
import Movie from '../components/Movie'
import react from "react";


const Movies=()=>{
    const [movies,setMovies]=useState([
        // {title:'dong coder1',year:2001},
        // {title:'dong coder2',year:2002},
        // {title:'dong coder3',year:2003},
      ])

    const addMovie=(movie)=>{
        //form했을때 페이지가 리로딩안됨
        
    
        setMovies([
          ...movies,movie
        ])
       
    
    
      }

    const removeMovie=(id)=>{
        setMovies(movies.filter(movie=>{
          return movie.id!==id;
        }))
      }

    const renderMovies=movies.length ? movies.map(movie=>{
        return(
          
    <Movie
     movie={movie} 
     key={movie.id}
    removeMovie={removeMovie}></Movie>
        )
      }) :'추가된 영화가 없습니다.'
    return(
    <div>        <h1>movie list</h1>
      <MovieForm 
      addMovie={addMovie}
      />
     {renderMovies}
     </div>

    )
}

export default Movies;