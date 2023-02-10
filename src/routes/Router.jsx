import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from '../pages/Details';
import Films from '../pages/Films';
import Home from '../pages/Home';

export const filmContext = createContext();

function Router() {

    const [movie, setMovie] = useState({});
    const [films, setFilms] = useState([]);

    return (
        <BrowserRouter>
            <filmContext.Provider value={{ movie, setMovie, films, setFilms }}>
                <Routes>
                    <Route path='*' element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="film/:name" element={<Details />}></Route>
                    <Route path="films" element={<Films />} />
                </Routes>
            </filmContext.Provider>

        </BrowserRouter>
    )
}

export default Router
