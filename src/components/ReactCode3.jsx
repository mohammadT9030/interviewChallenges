import React from "react";
import react3 from "./../img/react3.png";
import { useState } from "react";

const ReactCode3 = () => {
  const [modalIsActive, setModal] = useState(false);

  if (modalIsActive) return (
    <div>
      <center>
        <img src={react3} alt="" />
        <div className="container">
          <button onClick={()=> (setModal(!modalIsActive))}>show modal</button>
          <div className="div">Mode body text.</div>
        </div>
      </center>
    </div>
  );
  else {
    return ( <div>
      <center>
        <img src={react3} alt="" />
        <div className="container">
          <button onClick={()=> (setModal(!modalIsActive))}>show modal</button>
        </div>
      </center>
    </div> )
  }
};

export default ReactCode3;
