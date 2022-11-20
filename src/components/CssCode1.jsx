import React from "react";
import css1 from "./../img/css1.png";

const styles = {
  
};

const CssCode1 = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div>
      <center>
        <img src={css1} alt="" />
        <div className="container">
          <h1 style={styles.section}>hello world</h1>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
        </div>
      </center>
    </div>
  );
};

export default CssCode1;
