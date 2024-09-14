import * as React from "react";
import Typography from "@mui/material/Typography";
import BannerImage from "../assets/Banner.jpg";
import Product from "../components/Product";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"


function Home() {
  const query = useQuery({
    queryKey:["featured-Product"],
    queryFn: async()=>{
      try {
        const res= await axios.get("http://localhost:3000/products/featured")
        console.log(res)
        return res.data.data
      } catch (error) {
        console.log(error);
      }
      return [];
    }
  });
  console.log(query);

  return (
    <>
      
      <img src={BannerImage} width="100%" />
      <Typography variant="h3" textAlign={"center"} my={5}>Featured Products </Typography>
      <Grid container spacing={4} justifyContent="space-around">
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
      </Grid>
      <Typography variant="h3" textAlign={"center"} my={5}>Latest Products </Typography>
      <Grid container spacing={4}>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
        <Grid size={3}>
          <Product />
        </Grid>
      </Grid>


      
    </>
  );
}
export default Home;
