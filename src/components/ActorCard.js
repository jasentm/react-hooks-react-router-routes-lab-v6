import React from 'react'

export default function ActorCard({actor}) {

  return (
    <article>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => {
              return <li key={movie}>{movie}</li>
            })}
          </ul>
    </article>
  )
}


