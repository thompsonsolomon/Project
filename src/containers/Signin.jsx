import React, { useState, useContext } from "react";
import {useHistory} from 'react-router-dom'
import "../components/styles/Form.css";
import { FirebaseContext } from "../context/firebase";
import { NavLink } from "react-router-dom";
import logo from "../components/image/Netflix-Logo.svg";
import * as ROUTES from '../constants/routes'
import Swal from "sweetalert2"

export default function Signin() {


    const { firebase } = useContext(FirebaseContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";
  const history = useHistory()



  const HandleSignin = (event) => {
    event.preventDefault()
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Sign-in successful. ' 
        })
        history.push(ROUTES.BROWSE )
    })
    .catch((error) =>{
        setemail('')
        setpassword('')
        setError(error.message)
    })
  };
  return (
    <>
      <NavLink to="/" className="logo">
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <div className="top"></div>
      <form className="base" onSubmit={HandleSignin} method="POST">
        <h2 className="SignIntitle">Sign In</h2>
        {error && <div className="error">{error}</div>}
        <input
          className="FormInput"
          type="email"
          placeholder="Email address..."
          value={email}
          onChange={({ target }) => setemail(target.value)}
          required
        />
        <input
          className="FormInput"
          type="password"
          placeholder="Password..."
          autoComplete="off"
          value={password}
          onChange={({ target }) => setpassword(target.value)}
          required 
        />
        <button className="buttonSign" type="submit" disabled={isInvalid}>
          {" "}
          Signin
        </button>
        <h3 className="text">
          New to Netflix?
          <NavLink to="/Sign_up" className="link">
            Sign up Here
          </NavLink>
        </h3>
        <h4 className="smalltext">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </h4>
      </form>
    </>
  );
}
