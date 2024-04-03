import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const ErrorCode = ({ error }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center",gap:1 }}
      >
        <Typography variant="h1">{error.name}</Typography>
        <Typography>{error.type}</Typography>
        <Typography
          sx={{
            color: "#2b80fd",
            "&:hover": { color: "#1976d2" },
            cursor: "pointer",
          }}
        >
          <IconButton
            sx={{ color: "#2b80fd", "&:hover": { color: "#1976d2" } }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography variant="span" sx={{ textDecoration: "underline" }}>
            Return to Dashboard
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorCode;
