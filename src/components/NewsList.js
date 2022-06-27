import React, { useState } from 'react'
import NewsListItem from './NewsListItem'
import { Grid, Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'

function NewsList() {
    const newsList = useSelector(state => state.newsList)
    const [ currentPage, setCurrentPage ] = useState(1)  
    const [ postsPerPage ] = useState(10)         

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const posts = newsList === undefined ? [] : newsList.slice(indexOfFirstPost,indexOfLastPost)  
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber) 
    return (
        <Box>       
            <Grid container spacing={4} alignItems="stretch">                
                { posts !== undefined ? posts.map((item, i) => <NewsListItem key={i} storyId={item} />): null}
            </Grid>  
            <Pagination postsPerPage={postsPerPage} totalPosts={newsList.length} paginate={paginate} currentPage={currentPage} />                 
        </Box>            
    )
}

export default NewsList;
