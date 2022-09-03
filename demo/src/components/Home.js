import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import axios from 'axios';



function Home() {
    const [name, setName] = useState('')
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")




    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        axios.get(`http://www.omdbapi.com/?s=${name}&apikey=34992f21`)
            .then(res => res.data)
            .then(res => {
                setIsLoading(false)
                if (res.Response !== "False") {
                    setError('')
                    setMovies(res.Search)
                } else {
                    setMovies([])
                    setError(res.Error)
                }
            })
    }

    console.log(error)


    const handleFavorite = (a) => {
        dispatch({
            type: "favorite",
            payload: a
        })
    }
    return (
        <div className='home-main'>
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <h1>Search for movie, TV series ..</h1>
                    <input type="text" className='searchInput' value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='btn' >Search</button>
                </form>
            </div>
            {isLoading && <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
            }
            <div className="Movie_main">
                {movies && movies.map((a, b) => (
                    <div key={b} className="movie-main-inside">
                        <Link to="/moreDetails"> <img src={a?.Poster} onClick={() => dispatch({
                            type: "moreDetailId",
                            payload: a.imdbID
                        })} /> </Link>
                        <div className='home-btn'>
                            <button className='more-details' onClick={() => dispatch({
                                type: "moreDetailId",
                                payload: a.imdbID
                            })}><Link className='link' to="/moreDetails">More details</Link></button>
                            <button onClick={() => handleFavorite(a)} className='my-list'>Add to my list</button>
                        </div>
                    </div>
                ))}
            </div>
            {error && <div>Melumat tapilmadi...</div>}
        </div>
    )
}
export default Home