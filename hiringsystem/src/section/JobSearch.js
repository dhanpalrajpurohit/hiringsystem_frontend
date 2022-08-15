import React from 'react'
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import JobFilter from '../components/layouts/JobFilter';

const useStyles = makeStyles({
    root: {
        margin:0,
        padding:0
    }
  });


function JobSearch() {
    const clasess = useStyles();

    return (
        <Container>
            <Grid container className={clasess.root}>
                <Grid item xs={4}>
                    <JobFilter />
                </Grid>
                <Grid item xs={8}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default JobSearch
