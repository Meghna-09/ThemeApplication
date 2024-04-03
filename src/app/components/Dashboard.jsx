import React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import Image from "next/image";
// import LineGraph from '/LineGraph'
// import BarGraph from '/BarGraph'
const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <Card title="Primary Card" color="#0d6efd" detailsColor={"#0d6bf5"}/>
      </Grid>{" "}
      <Grid item xs={12} sm={3}>
        <Card title="Warning Card" color="#ffc107" detailsColor={"#f7bb07"}/>
      </Grid>{" "}
      <Grid item xs={12} sm={3}>
        <Card title="Success Card" color="#198754" detailsColor={"#188351"}/>
      </Grid>{" "}
      <Grid item xs={12} sm={3}>
        <Card title="Danger Card" color="#dc3545" detailsColor={"#d53343"}/>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Image src={LineGraph} alt='line graph'/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Image src={BarGraph} alt='line graph'/>

      </Grid> */}
    </Grid>
  );
  }

export default Dashboard;
