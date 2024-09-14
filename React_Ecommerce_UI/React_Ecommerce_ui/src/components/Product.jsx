import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://de.kicksmaniac.com/zdjecia/2022/08/23/508/43/NIKE_AIR_JORDAN_1_RETRO_HIGH_GS_RARE_AIR_MAX_ORANGE-mini.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NIKEAIRJORDAN1
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          The NIKE AIR JORDAN 1 RETRO is a classic, high-top basketball sneaker
          known for its iconic design, timeless appeal, and association with
          Michael Jordan.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <h4>Price: $ 20000</h4>
        </Button>
        <Button size="small">
          <h4>Add to Cart</h4>
        </Button>
      </CardActions>
    </Card>
  );
}
