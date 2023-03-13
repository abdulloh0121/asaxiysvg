import "./scss/_cards.scss";
import Footbol from "../assets/fotball.jpeg";
import { useState, useEffect, useContext } from "react"; 
import { ShopContext } from "./ShopContext";

function Card(e) {

  const [data, setData] = useState([]);
  const {increaseCounter} = useContext(ShopContext)

  // const increaseShopCounter =()=>{
  //   increaseCounter((prev)=> prev+1)

  // }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cardBox contaner">
      {data.map((item) => {
        return (
          <div  className="cardBox__href">
            <div className="cardBox__cards">
              <div className="cardBox__action">
                <div  className="cardBox__love">
                  <a  href="/">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                  </a>
                  <div onClick={()=> increaseCounter(item)} >
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div className="cardBox__img">
                <img
                  className="cardBox__imgs"
                  width="270"
                  height={200}
                  src={item.thumbnail}
                  alt="/"
                />
              </div>

              <div className="cardBox__texts">
                <strong className="cardBox__name">{item.title}</strong>
                <strong className="cardBox__name">{item.rating}</strong>
                <p className="cardBox__price">{item.price} $ dollar</p>
                <button className="cardBox__button">bir klikda olish</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
