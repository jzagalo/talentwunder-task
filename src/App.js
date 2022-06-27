import React, { useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import NewsList from './components/NewsList'
import { loadTopStories } from './state/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Task2 } from './Task2';

function App() {
    const dispatch = useDispatch()      

    useEffect(() => {        
        dispatch(loadTopStories())       
    },[dispatch])     
    
    const loading = useSelector(state => state.loading) 
    return (      
        <Container maxWidth="md">
            <Typography variant="h4" mb={2}>Hacker News Topstories</Typography>
            { loading ? <div className="spin"></div> : <NewsList /> }  
            <Task2 /> 
        </Container>        
    );
}

export default App;
