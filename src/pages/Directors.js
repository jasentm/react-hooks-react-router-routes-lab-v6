import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => {
      if(res.ok){
        return (res.json())
      }else {
        return (console.error("Something went wrong with your GET request"))
      }
    })
    .then(directorData => setDirectors(directorData))
  }, [])

  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
      {directors.map(director => {
          return <DirectorCard key={director.id} director={director} />})}
      </main>
    </>
  );
};

export default Directors;
