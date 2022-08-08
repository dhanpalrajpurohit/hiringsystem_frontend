import { Container, height } from '@mui/system';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Hidden } from '@mui/material';

import clasess from './styles/ProductSearch.css';

import { styled } from '@mui/material/styles';

const SearchBox = styled(Box)(({ theme }) => ({
  borderRadius:5,
  margin:'1%',
  overflow:'None',
  backgroundColor: '#d7e5fc',
}));

const SearchButton = styled(Button)(({ theme })=>({
  maxWidth: '100px', 
  maxHeight: '50px', 
  minWidth: '100px', 
  minHeight: '50px',
}));

const SearchTextField = styled(TextField)(({ theme })=>({
  border: "none"
}));

function ProductSearch() {
  return (
    <div>
      <SearchBox>
        <SearchTextField placeholder='Job Title or Keyword'/>
        <SearchTextField placeholder='Location'/>
        <SearchButton>Find Job</SearchButton>
        </SearchBox>
    </div>
  )
}

export default ProductSearch;