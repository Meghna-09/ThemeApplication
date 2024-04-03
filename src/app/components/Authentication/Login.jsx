"use Client";
import { Grid, TextField, Typography, Checkbox, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    setUserData({
      email: "",
      password: "",
    });
    setChecked(false);
    window.location.href = "/dashboard";
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
            <Typography variant="h4">Login</Typography>
          </Grid>
          <Grid container item spacing={2} xs={12} sx={{ p: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                value={userData?.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                name="password"
                value={userData?.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <Checkbox
                checked={checked}
                onClick={() => setChecked(!checked)}
              />
              <Typography>Remember Password</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Grid item>
                <Link href="/forgot-password">
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      color: "#2b80fd",
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    Forgot Password
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#2b80fd" }}
                  onClick={handleSubmit}
                >
                  Login
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
            onClick={()=>window.location.href='/create-account'}
              sx={{
                textDecoration: "underline",
                color: "#2b80fd",
                "&:hover": { color: "#1976d2" },
                cursor:'pointer'
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

export default Login;
