import React from "react";
import Alert from '../Alert'

function Header({ alert }) {
  return (
    <header>
      <div className="row">
        <h1 className="title">
          CATS-LAND
          <img
            src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="kittens"
          />
        </h1>
      </div>
      <div>
      {alert && <Alert alert={alert}/>}
      </div>
      {/* <div>
        <p id="alert-msg" className={alert ? "show red-msg" : "no-show"} >
          Please Enter cats fact
        </p>
      </div> */}
    </header>
  );
}

export default Header;
