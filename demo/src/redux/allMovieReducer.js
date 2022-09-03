
const allMovieReducer =(state=[], action)=>{

    switch (action.type) {
        case "data":
            return [...state, action.payload]
        default:
           return state;
    }

}

export default allMovieReducer