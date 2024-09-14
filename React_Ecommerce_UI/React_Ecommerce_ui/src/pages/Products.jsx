import Product from "../components/Product";
import Grid from "@mui/material/Grid2";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";

function Products() {
  return (
    <>
      <NavBar />

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
        <Grid size={3}>
          <Product />
        </Grid>{" "}
        <Grid size={3}>
          <Product />
        </Grid>{" "}
        <Grid size={3}>
          <Product />
        </Grid>{" "}
        <Grid size={3}>
          <Product />
        </Grid>{" "}
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
      <Pagination />
    </>
  );
}
export default Products;
