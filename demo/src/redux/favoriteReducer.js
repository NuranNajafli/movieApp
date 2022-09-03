

const favoriteReducer =(state=[], action)=>{

    switch (action.type) {
        case "favorite":
        return state=[...state, action.payload]
        case "Delete":
            return state = state.filter(a=>a !=action.payload)
        default:
            return state;
    }

}

export default favoriteReducer