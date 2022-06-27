import { LOAD_TOP_STORIES, TOGGLE_STORY } from "./actionTypes";

const initialState = {
    newsList: [],
    loading: true,
    toggleState: {} 
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TOP_STORIES:            
            return {
                ...state, newsList: action.payload.data, loading: false
            }
        case TOGGLE_STORY:  
            const storyId = action.payload.storyId
            let previousStories = { ...state.toggleState }
            if(previousStories[storyId] === undefined){
                previousStories[storyId] = true
            }else{
                previousStories[storyId] = ! previousStories[storyId]
            }
                        
            return {
                ...state, toggleState:previousStories, loading: false
            }  
        default:
            return state
    }
}
