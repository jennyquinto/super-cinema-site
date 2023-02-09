import React from 'react'

function Films({ filmsList }) {
  return (

    <section className='bottomSection'>
      {
        filmsList && filmsList.length ?
          (
            filmsList.map((film, index) =>
              <figure key={index}>
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`Poster ${film.title} movie `} />
              </figure>
            )
          )
          :
          (
            <div>Cargando</div>
          )
      }
    </section>

  )
}

export default Films
