import React from "react";
import css1 from "./../img/css1.png";

const styles = {
  container:  {
    width: '272px',
    height: '160px',
    border: 'solid #41c69e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBox: {
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    backgroundColor: 'blue',
    border: '1px solid white',
    marginLeft: '-15px',

  },
  marginLeftNegetive: {
    marginLeft: '-6px',
  }
};

const CssCode1 = () => {
  return (
    <div>
      <center>
        <img src={css1} alt="" />
        <div style={styles.container}>
          <div style={styles.imageBox}></div>
          <div style={styles.imageBox}></div>
          <div style={styles.imageBox}></div>
          <div style={styles.imageBox}></div>
        </div>
      </center>
    </div>
  );
};

export default CssCode1;
