import React, { useEffect, useState } from 'react';
import Search from '../components/home/Search';
import LayoutHome from '../components/home/LayoutHome';
import './home.scss';
import NewReleases from '../components/home/NewReleases';
import Films from '../components/home/Films';
import { getFilms } from '../services/data';

const Home = () => {
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        getFilms()
            .then(reponse => {
                return setFilmsList(reponse)
            })
            .catch(error => {
                console.log(error)
            })

    }, []);

    console.log(filmsList)

    return (
        <main className='mainHome'>
            <div className='mainHome__left'>
                <LayoutHome />

            </div>
            <div className='mainHome__right'>
                <Search />
                <NewReleases />
                <Films filmsList={filmsList} />
            </div>

        </main>
    )
}

export default Home
