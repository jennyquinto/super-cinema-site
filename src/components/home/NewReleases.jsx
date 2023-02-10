import React, { useEffect, useState } from 'react';
import '../../pages/home.scss';


function NewReleases({ filmsList }) {
  const lastfilmsList = [...filmsList];
  const [lastFilms, setLastFilms] = useState([]);

  useEffect(() => {
    setLastFilms(lastfilmsList.slice(0, 3));
    console.log(lastFilms)
  }, [filmsList]);

  return (
    <div className='middleSection'>
      <h2>New Releases</h2>
      <section>
        {
          lastFilms.map((film, index) =>
            <figure key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`Poster ${film.title} movie `} />
            </figure>
          )
        }
      </section>
    </div>
  )
}

export default NewReleases