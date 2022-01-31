import React,{useEffect,useState} from 'react'
import Movie from './components/Movie'
import MovieForm from './components/MovieForm'
import Navbar from './components/Navbar';
import Users from './pages/Users'
import Home from './pages/Home'
import Movies from './pages/Movies'
import routes from './routes'
import{
 BrowserRouter as Router,
 Switch,
 Route,
 
} from 'react-router-dom'
function App() {


  const [movieTitle,setMovieTitle]=useState('');
  const [movieYear,setMovieYear]=useState('');

  const [movies,setMovies]=useState([
    // {title:'dong coder1',year:2001},
    // {title:'dong coder2',year:2002},
    // {title:'dong coder3',year:2003},
  ])
  
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

  const addMovie=(movie)=>{
    //form했을때 페이지가 리로딩안됨
    

    setMovies([
      ...movies,movie
    ])
   


  }

 
  
  
  
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
    <Switch>
      {routes.map(route=>{
        return(
          <Route key={route.path} path={route.path} exact>
            <route.component></route.component>
          </Route>
        )
        
      })}
      
      </Switch>

      

      </div>
      </Router>
      //switch를 감싸면 한개만 경로 적용되면 밑에안내려가고 exact를 넣으면 확실하게 경로가 같아야한다
      

    
   
  );
}

export default App;
