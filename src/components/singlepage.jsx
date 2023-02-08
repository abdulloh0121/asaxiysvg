import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Singlepage = () => {
  const [products, setProducts] = useState([]);
  const [loding, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true)
    fetch(
      id === "all"
        ? "https://dummyjson.com/products/"
        : "https://dummyjson.com/products/category/" + id
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
        setLoading(false);
      });
  }, [id]);

  if (loding) {
    return <div>loding...</div>;
  }

  return (
    <div className="cardBox contaner">
      <a href="/" onClick={() => Singlepage("all")}>hamasi</a>
      {products.map((product) => (
        // <li>{product.title}</li>
        <a href="" className="cardBox__href">
          <div className="cardBox__cards">
            <div className="cardBox__action">
              <div className="cardBox__love">
                <a href="/">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                </a>
                <a href="/">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="cardBox__img">
              <img
                className="cardBox__imgs"
                width="270"
                height={200}
                src={product.thumbnail}
                alt="/"
              />
            </div>

            <div className="cardBox__texts">
              <strong className="cardBox__name">{product.title}</strong>
              <strong className="cardBox__name">{product.rating}</strong>
              <p className="cardBox__price">{product.price} 000 so'm</p>
              <button className="cardBox__button">bir klikda olish</button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
