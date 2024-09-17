import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Product({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://localhost:3000/${product?.image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          The NIKE AIR JORDAN 1 RETRO is a classic, high-top basketball sneaker
          known for its iconic design.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <h4>Price: $ {product?.price}</h4>
        </Button>
        <Button size="small">
          <h4>Add to Cart</h4>
        </Button>
      </CardActions>
    </Card>
  );
}
