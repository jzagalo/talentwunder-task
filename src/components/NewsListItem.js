import React, { useState, useEffect } from 'react'
import { fetchStoryById } from '../api/index'
import { useDispatch } from 'react-redux'
import { Grid,Box } from '@material-ui/core' 
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'


function NewsListItem({ storyId }) { 
    const [news, setNews] = useState("")   
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
                         { news.text && <div dangerouslySetInnerHTML={{ __html: news.text.slice(0, 200) + "...."}}></div>} 
                    </CardContent>
                    <CardActions>
                        <Grid container mt={5} direction="row" justifyContent="flex-end" alignItems="center">  
                            <Box ml={1}>{`by ${news.by}`}</Box>                                               
                        </Grid>
                    </CardActions>
                </Card>               
            </Grid>);
}

export default NewsListItem;