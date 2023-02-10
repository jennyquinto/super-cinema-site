import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../../pages/home.scss';
import searchIcon from '../../assets/icons/search.svg'
import { filmContext } from '../../routes/Router';


function Search() {
    const [input, setInput] = useState("");
    const {  setFilms } = useContext(filmContext);

    const searchFilms = async () => {
        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=b5ef548f8871b0bc494c1a64ce6a22ef&query=${input}`;
        if (input) {
            const { data } = await axios.get(queryUrl);
            setFilms(data.results);
        }
    };

    useEffect(() => {
        searchFilms();
    }, [input]);

    return (
        <section className='topSection'>
            <h2>Films</h2>
            <section>
                <img src={searchIcon} alt="search icon" />
                <input
                    type="text"
                    placeholder="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

            </section>
        </section>
    )
}

export default Search
