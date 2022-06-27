export async function fetchStoryById(id) {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)   
    let story = await response.json();   
    return story   
}