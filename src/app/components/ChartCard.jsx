import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const ChartCard = ({ icon, title,footer,child }) => {
  return (
    <Grid container spacing={2} sx={{ borderRadius: "10px" }}>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{ bgcolor: "#f7f7f7", display: "flex", gap: 1,alignItems:"center",borderTopRightRadius: "10px",borderTopLeftRadius: "10px" }}
      >
        <IconButton>{icon}</IconButton>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {child}
      </Grid>
     {footer && <Grid
        item
        xs={12}
        sm={12}
        sx={{ bgcolor: "#f7f7f7",borderBottomRightRadius:"10px" ,borderBottomLeftRadius:"10px"}}
      > 
        <Typography>{footer}</Typography>
      </Grid>}
    </Grid>
  );
};

export default ChartCard;
