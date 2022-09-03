import {createStore,combineReducers} from "redux"
import detailsReducer from "./detailsReducer"
import allMovieReducer from "./allMovieReducer"
import favoriteReducer from "./favoriteReducer"

const reducers= combineReducers({

    allMovieReducer,
    detailsReducer,
    favoriteReducer
   
})

export default function configureStore(){
    return createStore(reducers)
}