import React from 'react';
import '../../pages/home.scss';
import logoName from '../../assets/images/logo_SkysMobileApps.png';
import logo from '../../assets/images/logo_robot_SkysMobileApps.jpg';
import house from '../../assets/icons/house.ico';
import film from '../../assets/icons/films.png';
import { useNavigate } from 'react-router-dom';



function LayoutHome() {
    const navigate = useNavigate();


    return (
        <section className='navBar'>
            <figure>
                <img className='logo' src={logo} alt="" />
                <img className='nameLogo' src={logoName} alt="" />

            </figure>
            <nav>
                <button onClick={()=>{navigate("/")}}> <img src={house} alt="House icon" />Home</button>
                <button onClick={()=>{navigate("films")}}> <img src={film} alt="Films icon" />Films</button>
            </nav>
            <span>

            </span>
        </section>
    )
}

export default LayoutHome
