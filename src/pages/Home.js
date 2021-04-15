import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/products/FilterProducts";
import { fetchProducts } from "../features/products/ProductSlice";
import CardProduct from "../components/products/CardProduct";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filterItems);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {status === "loading" && <p>Loading</p>}
      {status === "succeded" && (
        <>
          <FilterProducts />
          <ProductsStyled>
            {products.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image_url}
                description={product.description}
                price={product.price}
                stock={product.stock}
              />
            ))}
          </ProductsStyled>
        </>
      )}
      {status === "failded" && <p>Error</p>}
    </>
  );
};

const ProductsStyled = styled.div`
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export default Home;
