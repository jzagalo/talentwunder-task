import React from 'react';
import { Button, Box } from '@material-ui/core';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
    let pageNumbers = []   

    for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }  
    
    return (
        <Box mt={3}>
            { pageNumbers.map(number => (
            <Button key={number} 
                    variant={currentPage === number ? "contained" : "outlined"} 
                    color={currentPage === number ? "primary" : "default"}
                    onClick={() => paginate(number)}>{number}</Button>
        ))}        
        </Box>
    );
};

export default Pagination;