import { LOAD_TOP_STORIES } from "./actionTypes";

const initialState = {
    newsList: [],
    loading: true   
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TOP_STORIES:            
            return {
                ...state, newsList: action.payload.data, loading: false
            }
        default:
            return state
    }
}
