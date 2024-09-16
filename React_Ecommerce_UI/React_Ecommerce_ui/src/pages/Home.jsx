import BannerImage from "../assets/Banner.jpg";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Skeleton } from "@mui/material";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";

function Home() {
  // console.log(query);

  return (
    <>
      <img src={BannerImage} width="100%" />
      <FeaturedProducts />
      <LatestProducts/>
    </>
  );
}
export default Home;
