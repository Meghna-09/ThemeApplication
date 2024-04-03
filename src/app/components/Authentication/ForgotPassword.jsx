"use Client";
import { Grid, TextField, Typography, Checkbox, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    setEmail("");
    window.location.href = "/login";
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%",height:"100%", bgcolor: "rgb(13 110 253)" }}
    >
      <Grid item xs={12}>
        <Grid
          container
          item
          spacing={2}
          xs={12}
          sx={{
            width: "40%",
            margin: "auto",
            bgcolor: "white",
            borderRadius: "10px",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 3,
              bgcolor: "#f7f7f7",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <Typography variant="h4">Password Recovery</Typography>
          </Grid>
          <Grid container item spacing={2} xs={12} sx={{ p: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Grid item>
                <Link href="/login">
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      color: "#2b80fd",
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    Return to login
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#2b80fd" }}
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#f7f7f7",
            }}
          >
            <Typography
              onClick={() => (window.location.href = "/create-account")}
              sx={{
                textDecoration: "underline",
                color: "#2b80fd",
                "&:hover": { color: "#1976d2" },
                cursor: "pointer",
              }}
            >
              Need an account? Sign up!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
