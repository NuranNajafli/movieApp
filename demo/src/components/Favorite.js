import React from 'react'
import { useSelector, useDispatch} from "react-redux"


function Favorite() {
    const selector = useSelector(state => state.favoriteReducer)
    const dispatch = useDispatch()
  return (
    <div className='MainFavorite'>
        {
            selector.map((a,b)=>(
                <div key={b} className="main-favorite">
                  <img src={a.Poster}/>
                  <p>{a.Title}</p>
                  <button onClick={()=>dispatch({ type: "Delete", payload: a})}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}
export default Favorite