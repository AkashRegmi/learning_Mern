import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { AuthContext } from "../App";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {  Chip } from "@mui/material";
import Button from '@mui/material/Button';


export default function Cart() {
  const { cart, setCart } = useContext(AuthContext);

  const handelDelete = (id) => {
    const newCartItem = cart.filter((product) => !(product._id === id));
    setCart(newCartItem);
  };

  const handelIncrement = (index) => {
    cart[index].quantity++;
    setCart([...cart]);
  };

  const handelDecrement = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      handelDelete(cart[index]._id);
      return;
    }
    setCart([...cart]);
  };

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Your Items in carts:
      </Typography>

      <List>
        {cart.map((product, index) => {
          return (
            <ListItem
              key={product._id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="increment"
                    onClick={() => handelDecrement(index)}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <Chip sx={{ ml: 1 }} label={product.quantity} />

                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handelIncrement(index)}
                  >
                    <ControlPointIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handelDelete(product._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar src={product.image} alt={product.name} />
              </ListItemAvatar>
              <ListItemText primary={product.name} secondary={`${product.quantity}* ${product.price}=$${product.price*product.quantity}`} />
            </ListItem>
          );
        })}
      </List>
      <Typography> <b>Total </b>:${totalPrice}</Typography>
      <Button variant="contained" > Proceed to Payment </Button>
    </Grid>
  );
}
