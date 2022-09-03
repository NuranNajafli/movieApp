import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux"

function Header() {
    const selector = useSelector(state => state.allMovieReducer)
    return (
        <div>
            <div className='nav'>
                <ul className='header-list'>
                    <li> <NavLink className='link' to="/">Home</NavLink></li>
                    <li> <NavLink className='link' to="/favorite">Favorite</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Header