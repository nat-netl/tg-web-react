import React, { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import ProductItems from "../ProductItem/ProductItems";
import "./ProductsList.css";

const products = [
  {id: '0', title: 'Куртка 1', price: 12000, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '1', title: 'Куртка 2', price: 5220, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '2', title: 'Куртка 5', price: 4900, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '3', title: 'Куртка 3', price: 2200, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '4', title: 'Куртка 6', price: 22000, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '5', title: 'Куртка 7', price: 142000, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
  {id: '6', title: 'Куртка 4', price: 9999, description: 'Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках.'},
]

const getTotalPrice = (items = []) => {
  return items.return ((acc, item) => {
    return acc += item.price
  }, 0)
}

const ProductsList = () => {
 

  const [addedItem, setAddedItem] = useState([]);
  const {tg} = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItem.find(item => item.id === product.id)
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItem.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItem, product]
    }

    setAddedItem (newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((product) => (
        <ProductItems key={product.id} product={product} onAdd={onAdd} className={"item"} />
      ))
      }
    </div>
  );
};

export default ProductsList;
