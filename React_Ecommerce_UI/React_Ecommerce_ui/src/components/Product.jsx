import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../App";

export default function Product({ product }) {
  const { cart, setCart } = useContext(AuthContext);
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
        <Button
          size="small"
          onClick={() => {
            const productExist = cart.find(({ _id }) => _id === product._id);
            const newCartItem = [...cart];
            console.log(productExist);
            if (productExist) {
              productExist.quantity++;
            } else {
              newCartItem.push({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
              });
            }

            setCart(newCartItem);
            localStorage.setItem('cart', JSON.stringify(newCartItem));
          }}
        >
          <h4>Add to Cart</h4>
        </Button>
      </CardActions>
    </Card>
  );
}
