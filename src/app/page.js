"use client";
import { Grid } from "@mui/material";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Error from "./components/ErrorCode";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ChartCard from "./components/ChartCard";
export default function Home() {
  return (
    <Grid item xs={12} sx={{ m: 2, p: 4 }}>
      <ChartCard
        icon={<PieChartOutlineIcon />}
        title={"ksdfkdkfk"}
        child={
          <Grid item xs={12}>
            kmasdksfkmkjld
          </Grid>
        }
        footer="sknfjkdjf"
      />
    </Grid>
  );
}
