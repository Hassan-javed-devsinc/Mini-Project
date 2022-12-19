import React from "react";
import Btn_Container from "./Btn_Container";
import { useState } from "react";
import "./Lower_Container.css";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom"

export default function Lower_Container(props, { navigation }) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(3.0);
  var ingr = ["Lettuce", "Barcon", "Cheese", "Meat"];
  const priceList = [0.4, 0.7, 1.2, 3];

  const lessHandler = (item) => {
    props.lessHandler(item);
    reducePrice(item);
  };

  const moreHandler = (item) => {
    props.moreHandler(item);
    addPrice(item);
  };

  const reducePrice = (item) => {
    let i = ingr.indexOf(item);
    setPrice((prev) => {
      return parseFloat(parseFloat(prev) - parseFloat(priceList[i])).toFixed(2);
    });
  };

  const addPrice = (item) => {
    let i = ingr.indexOf(item);
    console.log(item);
    setPrice((prev) => {
      return parseFloat(parseFloat(prev) + parseFloat(priceList[i])).toFixed(2);
    });
  };
  const signupHandler = () => {};

  return (
    <div className="low-con">
      <p className="price">
        Current Price : $<b>{price}</b>
      </p>
      <div className="low-size">
        <Btn_Container
          type={props.lettuce}
          name={ingr[0]}
          key={ingr[0]}
          lessHandler={lessHandler}
          moreHandler={moreHandler}
        />
        <Btn_Container
          type={props.barcon}
          name={ingr[1]}
          key={ingr[1]}
          lessHandler={lessHandler}
          moreHandler={moreHandler}
        />
        <Btn_Container
          type={props.cheese}
          name={ingr[2]}
          key={ingr[2]}
          lessHandler={lessHandler}
          moreHandler={moreHandler}
        />
        <Btn_Container
          type={props.meat}
          name={ingr[3]}
          key={ingr[3]}
          lessHandler={lessHandler}
          moreHandler={moreHandler}
        />
        <button
          onClick={() => {
            console.log("first");
            return navigate("/login")
          }}

          type="button"
          disabled={props.disable}
          className={props.disable ? "disable-signup" : "sign-up"}
        >
          SIGN UP TO ORDER
        </button>
      </div>
    </div>
  );
}
