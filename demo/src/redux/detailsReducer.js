

const detailsReducer = (state = [], action) => {

    switch (action.type) {
        case "moreDetail":
            return state = action.payload
        case "moreDetailId":
            return state = action.payload
        default:
            return state;
    }

}

export default detailsReducer