import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataFilms } from '../services/data';
import './films.scss';
function Films() {

    const [filmsPage, setFilmsPage] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = async () => {
        const response = await Promise.all([dataFilms()]);
        setFilmsPage(...response);
    }
    console.log(filmsPage)
    return (
        <div className='filmPage'>
            <button onClick={()=>{navigate("/")}}>&gt;&gt;Home</button>
            <h2>
                Films Titles
            </h2>
            <ul>

                {
                    filmsPage && filmsPage.length ?
                        (
                            filmsPage.map((film, index) =>
                                <li key={index}>
                                    {film.original_title}
                                </li>
                            )
                        )
                        :
                        (<h4>Loading...</h4>)
                }
            </ul>

        </div >
    )
}

export default Films
