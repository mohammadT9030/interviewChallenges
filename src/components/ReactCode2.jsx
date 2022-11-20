import React from "react";
import react2 from "./../img/react2.png";
const ReactCode2 = () => {
  return (
    <div>
      <center>
        <img src={react2} alt="" />
        <div className="container">
          <form action="#" className="login-form">
            <label htmlFor="username">نام کاربری</label>
            <input type="text" name="username" />
            <label htmlFor="username">رمز عبور</label>
            <input type="text" name="password" />
            <button>ورود</button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default ReactCode2;
