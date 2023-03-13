import "./scss/_header.scss";
import { Squash as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

function Header() {
  const [showModall, setShovModal] = useState(false);
  const [showModalls, setShovModals] = useState(true);
  const [catigory, setCatigory] = useState([]);
  const { counter } = useContext(ShopContext);
  const toggles = () => {
    setShovModal(!showModall);
  };
  const toggle = () => {
    setShovModals(!showModalls);
  };
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      setCatigory(json);
    });

  return (
    <div className="box">
      {/* hamburger */}
      {showModall && (
        <div className="hambur">
          <div className="hambur__card">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
              alt="/"
            />
          </div>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
              alt="/"
            />
            <span>to'lov</span>
          </a>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="	https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
              alt="/"
            />
            <span>buyurtmani kuzatib borish</span>
          </a>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
              alt="/"
            />
            <span>sevimlilar </span>
          </a>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="https://asaxiy.uz/custom-assets/images/icons/header/icons8-new-product.svg"
              alt="/"
            />
            <span>yangi kelganlar</span>
          </a>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
              alt="/"
            />
            <span>yangiliklar</span>
          </a>
          <a className="hambur__href" href="">
            <img
              width="30"
              height="30px"
              src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
              alt="/"
            />
            <span>biz haqimizda</span>
          </a>
          <input className="hambur__input" type="text" placeholder="o'zbek" />
          <div className="hambur__icon">
            <a href="/"></a>
            <a href="/">
              <img src="" alt="teligiram" />
            </a>
          </div>
        </div>
      )}
      <div className="boxs">
        <div className="contaner">
          <nav className="navbar">
            <div className="hamburger">
              <Hamburger onToggle={toggles} color="#008dff" />
              
            </div>
            <div className="navbar__cart">
              <a href="#">
                <img
                  src="	https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                  alt="loga"
                />
              </a>
              <form className="navbar__form" action="/">
                <input
                  className="navbar__input"
                  type="text"
                  name="/"
                  placeholder="qidirish..."
                  id="#"
                />
                <button className="navbar__button">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
                    alt=""
                  />
                  Qidirish
                </button>
              </form>
            </div>

            <a className="navbar__href" href="">
              <img
                width="30"
                height="30px"
                src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                alt=""
              />
              <span>to'lov</span>
            </a>
            <a className="navbar__href" href="">
              <img
                width="30"
                height="30px"
                src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                alt=""
              />
              <span>trek</span>
            </a>
            <a className="navbar__href" href="">
              <img
                width="25"
                height="30px"
                src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                alt=""
              />
              <span>o'zbekcha</span>
            </a>
            <a className="navbar__href" href="">
              <img
                width="25"
                height="30px"
                src="	https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                alt=""
              />
              <span>savatcha</span>
            </a>
            <a className="navbar__href" href="">
              <img
                width="25"
                height="30px"
                src=" https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                alt=""
              />
              <span>sevimlilar{counter}</span>
            </a>
            <a className="navbar__href" href="">
              <img
                width="30"
                height="28px"
                src="	https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                alt=""
              />
              <span>kabenit</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="contaner">
        <Hamburger onToggle={toggle} color="#008dff" />

        {!showModalls && (
          <div className="navtext">
            <div className=" contaner">
              <div className="navtext__card">
                {catigory.map((catigory, i) => (
                  <Link className="navtext__text" key={i} to={`/${catigory}`}>
                  💻{catigory} , 
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
