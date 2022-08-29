import axios from "axios";
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import Rating from "./Rating";

function Product(props) {
  const { product: p } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === p._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <Card className="product" key={p._id}>
      <Link to={`/product/${p._id}`}>
        <img src={p.image} alt={p.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${p._id}`}>
          <Card.Title>{p.name}</Card.Title>
        </Link>
        <Rating rating={p.rating} numReviews={p.numReviews} />
        <Card.Text>${p.price}</Card.Text>
        {p.countInStock === 0 ? (
          <Button variant="light" disabled>Out of stock</Button>
        ) : (
          <Button onClick={() => addToCartHandler(p)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
