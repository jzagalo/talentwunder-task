import React, { useState, useEffect } from 'react'
import { fetchStoryById } from '../api/index'
import { toggleStory } from '../state/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Grid,Box, Button } from '@material-ui/core' 
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Person from '@material-ui/icons/Person'


function NewsListItem({ storyId }) { 
    const [news, setNews] = useState("") 
    const toggleState = useSelector(state => state.toggleState)     
    const dispatch = useDispatch()     
   
    useEffect(() => {
        fetchStoryById(storyId)
        .then(data => setNews(data)) 

    }, [dispatch, storyId])

    function convertTime(ts){
        let time = new Date(ts).toLocaleString();
        return time; 
    }   
     
    return (<Grid item md={6} mt={4}>              
                <Card>
                    <CardHeader
                    className="story-header"
                    title={news.title}
                    subheader={convertTime(news.time)}>                    
                    </CardHeader>
                    <CardContent mt={0}>
                        { news.text && <div dangerouslySetInnerHTML={{ __html: toggleState[storyId] ? news.text :  news.text.slice(0, 200) + (news.text.length > 200 ? "...": "") }}></div>}         
                        { news.text && news.text.length > 200 && <Button variant="text" onClick={() => dispatch(toggleStory(storyId))}>
                        { toggleState[storyId] ? "Show less" : "Show More"}
                    </Button>}
                    </CardContent>
                    <CardActions>                         
                        <Grid container mt={5} direction="row" justifyContent="flex-end" alignItems="center">  
                            <Person /><Box ml={1}>{news.by}</Box>                                               
                        </Grid>                    
                    </CardActions>
                </Card>               
            </Grid>);
}

export default NewsListItem;