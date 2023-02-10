import React from 'react';
import '../../pages/home.scss';

function Films({ filmsList, filmDetail, films }) {
  return (

    <section className='bottomSection'>
      {
        filmsList && filmsList.length && films == false ?
          (
            filmsList.map((film, index) =>
              <figure key={index}>
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`Poster ${film.title} movie `} onClick={() => { filmDetail(film) }} />
              </figure>
            )
          )
          :
          (
            <>
              {
                
                films.map((film, index) =>
                  <figure key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`Poster ${film.title} movie `} onClick={() => { filmDetail(film) }} />
                  </figure>
                )
              }
            </>
          )
      }
    </section>

  )
}

export default Films
