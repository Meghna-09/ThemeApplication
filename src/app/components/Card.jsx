import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Card = ({ color, title,detailsColor }) => {
  return (
    <Grid container spacing={2} sx={{ borderRadius: "8px", bgcolor: color,color:'white',borderBottom:"1px solid #ddd" }}>
      <Grid item xs={12} sx={{p:2.5}}>
        <Typography fontWeight='600'>{title}</Typography>
      </Grid>
      <Grid item xs={12} sx={{bgcolor:detailsColor,display:'flex',alignItems:'center',justifyContent:"space-between",borderRadius:"8px",p:0.5}}>
        <Typography sx={{textDecoration:'underline',}}>View Details</Typography>
        <IconButton><KeyboardArrowRightIcon sx={{color:"white",fontSize:"1rem"}}/></IconButton>
      </Grid>
    </Grid>
  );
};

export default Card;
