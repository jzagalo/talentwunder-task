import React from 'react'
import NewsListItem from './NewsListItem'
import { Grid, Box } from '@material-ui/core'
import { useSelector } from 'react-redux'

function NewsList() {
    const newsList = useSelector(state => state.newsList)
    return (
        <Box>       
            <Grid container spacing={4} alignItems="stretch">                
                { newsList !== undefined ? newsList.map((item, i) => <NewsListItem key={i} storyId={item} />): null}
            </Grid>            
        </Box>            
    )
}

export default NewsList;
