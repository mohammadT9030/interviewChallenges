import React from "react";
import react1 from "./../img/react1.png";
import react4 from "./../img/react4.png";
import { useState } from 'react';

const ReactCode1 = () => {
  const [activeCard, setActive] = useState(0);
  const [myCards, setCards] = useState([1,2,3,4]);

  return (
    <div>
      <center>
        <img src={react1} alt="" />
      </center>
      <div className="container">
        <ul className="cards">
          <li className={"card "+(activeCard === 1 && "card--active")} onClick={()=>(setActive(1))}>
            <h2 className="card__heading-1">Card title</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(activeCard === 2 && "card--active")} onClick={()=>(setActive(2))}>
            <h2 className="card__heading-1">Card title</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(activeCard === 3 && "card--active")} onClick={()=>(setActive(3))}>
            <h2 className="card__heading-1">Card title</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(activeCard === 4 && "card--active")} onClick={()=>(setActive(4))}>
            <h2 className="card__heading-1">Card title</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
        </ul>
      </div>

      <div className="container">
        <ul className="cards">
          <li className={"card "+(!myCards.includes(1) && "card--hidden")} onClick={()=>(setCards(myCards.filter(c => c !== 1)))}>
            <h2 className="card__heading-1">Card title 1</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(!myCards.includes(2) && "card--hidden")} onClick={()=>(setCards(myCards.filter(c => c !== 2)))}>
            <h2 className="card__heading-1">Card title 2</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(!myCards.includes(3) && "card--hidden")} onClick={()=>(setCards(myCards.filter(c => c !== 3)))}>
            <h2 className="card__heading-1">Card title 3</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
          <li className={"card "+(!myCards.includes(4) && "card--hidden")} onClick={()=>(setCards(myCards.filter(c => c !== 4)))}>
            <h2 className="card__heading-1">Card title 4</h2>
            <h3 className="card__heading-2">Card subitle</h3>
            <p className="card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, non reprehenderit. Id dolorum veniam aliquam explicabo.
            </p>
            <button className="card__button">Primary</button>
          </li>
        </ul>
      </div>
      <center>
        <img src={react4} alt="" />
      </center>
    </div>
  );
};

export default ReactCode1;
