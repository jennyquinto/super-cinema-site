import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { filmContext } from '../routes/Router';
import './details.scss';

function Details() {
    const { movie } = useContext(filmContext);
    const navigate = useNavigate();

    return (
        <div className='filmDetail'>
            <button onClick={()=>{navigate("/")}}>&gt;&gt;Home</button>
            <div>
                {

                    movie ?
                        (<>
                            <figure>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster ${movie.title} movie `} />
                            </figure>
                            <section>
                                <h2>{movie.original_title}</h2>
                                <p>{movie.overview}</p>

                            </section>
                        </>
                        )
                        :
                        (
                            <div>Cargando</div>
                        )


                }

            </div>

        </div>
    )
}

export default Details