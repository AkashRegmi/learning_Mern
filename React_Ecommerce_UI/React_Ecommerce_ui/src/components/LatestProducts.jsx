import Typography from "@mui/material/Typography";

import Product from "../components/Product";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@mui/material";

function LatestProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-Product"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:3000/products/latest");
        console.log(res);
        return res.data.data;
      } catch (error) {
        console.log(error);
      }
      return [];
    },
  });
  // console.log(query);

  return (
    <>
      <Typography variant="h3" textAlign={"center"} my={5}>
        Latest Products{" "}
      </Typography>
      <Grid container spacing={4} justifyContent="space-around">
        {isLoading ? (
          <>
            <Grid size={3}>
              <Skeleton height="400px" width="100%" />
            </Grid>
            <Grid size={3}>
              <Skeleton height="400px" width="100%" />
            </Grid>
            <Grid size={3}>
              <Skeleton height="400px" width="100%" />
            </Grid>
            <Grid size={3}>
              <Skeleton height="400px" width="100%" />
            </Grid>
          </>
        ) : (
          <>
            {data.map((product) => {
              return (
                <Grid key={product._id} size={3}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
}
export default LatestProducts;
