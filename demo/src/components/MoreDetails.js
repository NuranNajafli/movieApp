import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



function MoreDetails() {
  const [detailInfo, setDetailInfo] = useState('');
  const selector = useSelector(state => state.detailsReducer)


  useEffect(() => {
    console.log(selector)
    selector && axios.get(`http://www.omdbapi.com/?i=${selector}&apikey=34992f21`)
      .then(res => res.data)
      .then(response => {
        setDetailInfo(response)
      })
  }, [selector])


  return (
    <div>
      {
        <div className='single-main' >
          <div className='single-main-left'>
            <img src={detailInfo.Poster} />
          </div>
          <div className='single-main-right'>
            <h1>{detailInfo.Title}</h1>
            <ul>
              <li><b>Released:</b> {detailInfo.Released}</li>
              <li><b>Runtime:</b> {detailInfo.Runtime}</li>
              <li><b>Genre:</b> {detailInfo.Genre}</li>
              <li><b>Language:</b> {detailInfo.Language}</li>
              <li><b>Type:</b> {detailInfo.Type}</li>
            </ul>
            <p>{detailInfo.Plot}</p>
            <div className='buttons'>
              <Link to="/" className='btn'>Go to Home</Link>
              <a href={`https://www.imdb.com/title/${selector}/`} target="_blank" className="btn">To watch movie</a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default MoreDetails