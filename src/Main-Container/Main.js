import React from "react";
import Lower_Container from "./Lower_Container";
import { useState } from "react";
import Sauce from './Sauce'
import Display from "./Display";
import "./Main.css";
import top from "../Bun-Images/top-bun.png";
import bottom from "../Bun-Images/bottom-bun.png";
import { useEffect } from "react";

export default function Main() {
  const [lettuce, setLettuce] = useState([]);
  const [barcon, setBarcon] = useState([]);
  const [cheese, setCheese] = useState([]);
  const [meat, setMeat] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setcount] = useState(0)

  const em = lettuce.length + barcon.length + cheese.length + meat.length;

  useEffect(() => {
    if (em > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [em]);

  const lessHandler = (item) => {
    if (item === "Lettuce") {
      setLettuce(lettuce.slice(0, -1));
    } else if (item === "Barcon") {
      setBarcon(barcon.slice(0, -1));
    } else if (item === "Cheese") {
      setCheese(cheese.slice(0, -1));
    } else {
      setMeat(meat.slice(0, -1));
    }
  };

  const moreHandler = (item) => {
    setcount((prev) => {
      return prev + 1;
    });
    if (item === "Lettuce") {
      setLettuce((prev) => {
        return [...prev, <Sauce key={count} className="lettuce" />];
      });
    } else if (item === "Barcon") {
      setBarcon((prev) => {
        return [...prev, <Sauce key={count}  className="barcon" />];
      });
    } else if (item === "Cheese") {
      setCheese((prev) => {
        return [...prev, <Sauce key={count}  className="cheese" />];
      });
    } else {
      setMeat((prev) => {
        return [...prev, <Sauce key={count} className="meat" />];
      });
    }
  };

  return (
    <div className="main">
      <div className="main-top">
        <img src={top} />
        {isEmpty ? (
          <h3 className="empty">No Ingredients Added</h3>
        ) : (
          <div className="burger-items">
            <Display name={lettuce} />
            <Display name={barcon} />
            <Display name={cheese} />
            <Display name={meat} />
          </div>
        )}
        <img className="btm-bun" src={bottom} />
      </div>

      <div className="main-btm">
        <Lower_Container
          disable={isEmpty}
          lettuce={lettuce}
          barcon={barcon}
          cheese={cheese}
          lessHandler={lessHandler}
          meat={meat}
          moreHandler={moreHandler}
        />
      </div>
    </div>
  );
}
