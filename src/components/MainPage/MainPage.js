import React from 'react';
import home from '../../img/home.jpg';
import './MainPage.css';
const MainPage = () => {
    return(
        <div className = "main">
            <img className ="img" src = {home} alt = "home"/>
            <p>Mortgage calculator</p>
        </div>
    )
}

export default MainPage;