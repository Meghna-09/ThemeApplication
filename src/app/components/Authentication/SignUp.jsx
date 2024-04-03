"use Client";
import { Grid, TextField, Typography, Checkbox, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    setUserData({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: "",
    });
    window.location.href = "/login";
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "100%", bgcolor: "rgb(13 110 253)" }}
    >
      <Grid item xs={12}>
        <Grid
          container
          item
          spacing={2}
          xs={12}
          sx={{
            width: "50%",
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
            <Typography variant="h4">Create Account</Typography>
          </Grid>
          <Grid container item spacing={2} xs={12} sx={{ p: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="firstname"
                value={userData?.firstname}
                onChange={handleChange}
                placeholder="First Name"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="lastname"
                value={userData?.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </Grid>
            <Grid item xs={12} sm={12}>

            <TextField
                fullWidth
                name="email"
                value={userData?.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                name="password"
                value={userData?.password}
                onChange={handleChange}
                placeholder="Password"
              />
               </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                name="confirmpassword"
                value={userData?.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </Grid>
            </Grid>
            <Grid iten xs={12} sm={12} sx={{p:2}}>
                <Button
                fullWidth
                  variant="contained"
                  sx={{ bgcolor: "#2b80fd" }}
                  onClick={handleSubmit}
                >
                  Create Account
                </Button>
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
            onClick={()=>window.location.href='/login'}
              sx={{
                textDecoration: "underline",
                color: "#2b80fd",
                "&:hover": { color: "#1976d2" },
                cursor:'pointer'
              }}
            >
              Have an account? Go to login
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default SignUp;
