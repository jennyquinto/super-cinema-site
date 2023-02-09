import React from 'react';
import Search from '../components/home/Search';
import LayoutHome from '../components/home/LayoutHome';
import './home.scss';
import NewReleases from '../components/home/NewReleases';
import Films from '../components/home/Films';

function Home() {
    return (
        <main className='mainHome'>
            <div className='mainHome__left'>
                <LayoutHome />

            </div>
            <div className='mainHome__right'>
                <Search />
                <NewReleases />
                <Films />
            </div>

        </main>
    )
}

export default Home
