import { LOAD_TOP_STORIES, TOGGLE_STORY } from "./actionTypes"
// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
export function loadTopStories() {
    return (dispatch) => {       
        fetch("https://hacker-news.firebaseio.com/v0/askstories.json") 
        .then(res => res.json())
        .then(data => {  
            console.log(data)          
            dispatch({ type: LOAD_TOP_STORIES, payload:{ data } })   
        })
        .catch(err => console.log('Request Failed', err))      
    };
}

export function toggleStory(storyId){
    return{
        type: TOGGLE_STORY,
        payload: { storyId }
    }
}


