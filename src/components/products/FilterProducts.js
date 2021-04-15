import React from "react";
import { filterItemProduct } from "../../features/products/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

const FilterProducts = () => {
  const categories = useSelector((state) => state.products.categories);
  const categorySelect = useSelector((state) => state.products.categorySelect);
  const dispatch = useDispatch();
  const filterItem = (item) => {
    dispatch(filterItemProduct({ type: item }));
  };
  return (
    <CatsStyled>
      <div
        className={`option ${categorySelect === "todos" && "selected"}`}
        onClick={() => {
          filterItem("todos");
        }}
      >
        todos
      </div>
      {categories.map((cat) => (
        <div
          key={cat}
          className={`option ${categorySelect === cat && "selected"}`}
          onClick={() => {
            filterItem(cat);
          }}
        >
          {cat}
        </div>
      ))}
    </CatsStyled>
  );
};

const CatsStyled = styled.div`
  display: flex;
  gap: 10px;
  .selected {
    color: white;
    background-color: orange;
  }
  .option {
    padding: 5px 20px;
    border: 3px solid yellow;
    cursor: pointer;
    &:hover {
      background-color: orange;
      color: white;
    }
  }
`;

export default FilterProducts;
