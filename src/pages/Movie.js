import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => {
      if(res.ok){
        return (res.json())
      }else{
        return (console.error("Something went wrong with your GET request..."))
      }
    })
    .then(data => setMovie(data))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  if(!movie.genres){
    return <span>Loading...</span>
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time}</p>
        {movie.genres.map(genre => {
    return <span>{genre}</span>
  })}
      </main>
    </>
  );
};

export default Movie;
