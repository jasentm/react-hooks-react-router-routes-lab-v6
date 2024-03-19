import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => {
      if(res.ok){
        return (res.json())
      }else {
        return (console.error("Something went wrong with your GET request"))
      }
    })
    .then(actorData => setActors(actorData))
  }, [])

  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => {
          return <ActorCard key={actor.id} actor={actor} />
        })}
      </main>
    </>
  );
};

export default Actors;
