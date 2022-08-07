import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './RestaurantCard'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        marginTop = "100px"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
>
        <Grid marginRight = "50px">
          <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid marginRight = "50px">
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid marginRight = "50px">
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
      </Grid>
    </Box>
  );
}


