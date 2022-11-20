import React from "react";
import css3 from "./../img/css3.png";
import './CssCode3.css'

const styles = {
  navigation:  {
    backgroundColor: "#e3f2fd",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    gap: "30px",
  },
  navigation__item: {
    color: "#007bff",
    fontWeight: "400",
  },
  navigation__name: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#212529",
  },
  navigation__form: {
    display: "flex",
    marginLeft: 'auto',
    fontSize: '16px'
  },
  navigation__input: {
    marginRight: '7px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid gray',
    fontSize: "inherit"
  },
  navigation__button: {
    borderRadius: '5px',
    border: '1px solid',
    fontSize: "inherit",
    padding: '10px',

  }
};


const CssCode3 = () => {
  return (
    <div>
      <center>
        <img src={css3} alt="" />
        <div className="container">
          <nav style={styles.navigation}>
            <div style={styles.navigation__name}>Navbar</div>
            <div style={styles.navigation__item}>Active</div>
            <div style={styles.navigation__item}>Link</div>
            <div style={styles.navigation__item}>Link</div>
            <div style={styles.navigation__item}>Disabled</div>
            <form action="#" style={styles.navigation__form}>
              <input type="text" placeholder="Search" style={styles.navigation__input} />
              <button style={styles.navigation__button}>Search</button>
            </form>
          </nav>
        </div>
      </center>
    </div>
  );
};

export default CssCode3;
