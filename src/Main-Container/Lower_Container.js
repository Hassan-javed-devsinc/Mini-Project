import React from "react";
import Btn_Container from "./Btn_Container";
import { useState } from "react";
import "./Lower_Container.css";
import { useNavigate } from "react-router-dom"

export default function Lower_Container(props) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(3.00);
  var ingr = ["Lettuce", "Barcon", "Cheese", "Meat"];
  const priceList = [0.4, 0.7, 1.2, 3.00];
  const objects = [props.lettuce, props.barcon,props.cheese,props.meat];

  const lessHandler = (item) => {
    props.lessHandler(item);
    priceHandler(item,"-")
  };

  const moreHandler = (item) => {
    props.moreHandler(item);
    priceHandler(item, "+");
  };

  const priceHandler = (item,opr) => {
    let i = ingr.indexOf(item);
    opr === "+"
      ? setPrice((prev) => prev + priceList[i]) 
      : setPrice((prev) => prev - priceList[i])
  }

  return (
    <div className="low-con">
      <p className="price">
        Current Price : $<b>{price.toFixed(2)}</b>
      </p>
      <div className="low-size">
        {
          ingr.map((i,index)=>{
            return <Btn_Container
              name={i}
              key={index}
              index={index}
              objects={objects}
              lessHandler={lessHandler}
              moreHandler={moreHandler}
              ingre={ingr}
            />;
          })
        }
        
        <button
          onClick={() => navigate("/login")}
          disabled={props.disable}
          className={props.disable ? "disable-signup" : "sign-up"}
        >
          SIGN UP TO ORDER
        </button>
      </div>
    </div>
  );
}
