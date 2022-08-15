import React from 'react'
import { Box, Checkbox, FormControl, FormGroup, FormControlLabel, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FilterListIcon from '@mui/icons-material/FilterList';

const useStyles = makeStyles({
    root:{
        margin:0,
        padding:0,
        justifyContent:"left"
    },
    icon: {
        verticalAlign: "middle",
        margin: "5px",
        fontSize: 50,
        color: 'green'
    }
})


function JobFilter() {
    const clasess = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const JobType = (
        <div>
            <Typography variant="h6" component="h2">Job Type</Typography>
            <FormControl>
                    <Select value={10} onChange={handleChange}>
                        <MenuItem value={10}>All Category</MenuItem>
                    </Select>
                </FormControl>
        </div>
    )
    const JobCategory = (
            <div>
                <Typography variant="h6" component="h2">Job Category</Typography>
                    <Select value={10} onChange={handleChange}>
                        <MenuItem value={10}>All Category</MenuItem>
                    </Select>
            </div>
    )
    const Experience = (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </FormGroup>
        </div>
    )
    return (
        <Box className={clasess.root}>
            <Typography variant="h6" component="h2">
                <FilterListIcon className={clasess.icon} sx={{ fontSize: 30 }} />Filter Jobs
            </Typography >
            <Paper variant="outlined" square>
            <FormControl>
                {JobCategory}
                {JobType}
                {Experience}
            </FormControl>
            </Paper>
        </Box>
    )
}

export default JobFilter
