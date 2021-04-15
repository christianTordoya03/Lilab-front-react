import React from "react";
import { useHistory } from "react-router";
import Button from "../UI/Button";
import styled from "@emotion/styled";
import { addItemtoCart } from "../../features/shopCart/ShopCartSlice";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";

const CardProduct = ({ id, name, description, image, price, stock }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemtoCart({ id, name, image, price }));
    history.push("/cart");
  };
  return (
    <Card>
      <ImageProduct src={image} />
      <Content>
        <h3>
          {name}({stock} products in stock)
        </h3>
        <p className="description">{description}</p>
        <p className="price">
          Price: <span>{price}$</span>
        </p>
        <Button
          onClick={() => {
            addItem();
          }}
        >
          Add to cart
        </Button>
      </Content>
    </Card>
  );
};

const ImageProduct = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 6px;
  .description {
    font-size: 12px;
  }
  .price {
    font-size: 14px;
    span {
      font-weight: bold;
    }
  }
`;

export default CardProduct;
