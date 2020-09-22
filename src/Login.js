import React from "react";
import "./Login.css";
import fb_logo from "./images/fb_logo.png";
import fb_logo_wine from "./images/fb_logo_wine.svg";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  console.log(state);
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={fb_logo} alt="" />
        <img src={fb_logo_wine} alt="" />
      </div>
      <Button
        type="submit"
        onClick={signIn}
        color="primary"
        variant="contained"
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
