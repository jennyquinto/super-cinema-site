import React, { useContext, useEffect, useState } from 'react';
import Search from '../components/home/Search';
import LayoutHome from '../components/home/LayoutHome';
import './home.scss';
import NewReleases from '../components/home/NewReleases';
import Films from '../components/home/Films';
import { getFilms } from '../services/data';
import { useNavigate } from 'react-router-dom';
import { filmContext } from '../routes/Router';

const Home = () => {

    const { films, setMovie } = useContext(filmContext);
    const [filmsList, setFilmsList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getFilms()
            .then(reponse => {
                return setFilmsList(reponse)
            })
            .catch(error => {
                console.log(error)
            });

    }, []);


    const filmDetail = (film) => {
        const filmName = film.original_title.toLowerCase();
        navigate(`/film/${filmName}`);
        setMovie(film)
    };

    return (
        <main className='mainHome'>
            <div className='mainHome__left'>
                <LayoutHome />
            </div>
            <div className='mainHome__right'>
                <Search />
                <NewReleases filmsList={filmsList} />
                <Films filmsList={filmsList} filmDetail={filmDetail} films={films} />
            </div>

        </main>
    )
}

export default Home
