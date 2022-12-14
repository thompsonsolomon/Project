import "../components/styles/Form.css";
import Footer from "../containers/Footer";
import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import "../components/styles/Form.css";
import { NavLink } from "react-router-dom";
import logo from "../components/image/Netflix-Logo.svg";
import * as ROUTES from "../constants/routes";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../context/firebase.prod";

export default function Signin() {
  const [email, setemail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const isInvalid = firstName === "" || password === "" || email === "";

  const HandleSignup = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5 + 1) + ".png",
      });
      const Toast = Swal.mixin({

        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Sign-up successful. ",
      });
      history.push(ROUTES.BROWSE);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    // localStorage.setItem("displayName", JSON.stringify(firstName));
    // localStorage.setItem(
    //   "photoUrl",
    //   JSON.stringify(Math.floor(Math.random() * 5 + 1) + ".png")
    // );
    // console.log(firstName);

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((result) => {
    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 5000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener("mouseenter", Swal.stopTimer);
    //       toast.addEventListener("mouseleave", Swal.resumeTimer);
    //     },
    //   });
    //   Toast.fire({
    //     icon: "success",
    //     title: "Sign-up successful. ",
    //   });
    //   console.log(result.User);
    //   history.push(ROUTES.BROWSE);
    // })
    //   .catch((error) => {
    //     setemail("");
    //     setpassword("");
    //     setFirstName("");
    //     setError(error.message);
    //   });
  };

  return (
    <>
      <div className="header">
        <NavLink to="/" className="logo">
          <img src={logo} alt="" className="logo" />
        </NavLink>

        <form className="base" onSubmit={HandleSignup} method="POST">
          <h2 className="SignIntitle">Sign In</h2>
          {error && <div className="error">{error}</div>}
          <input
            className="FormInput"
            type="text"
            placeholder="FirstName.."
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
            autoFocus
            required
          />

          <input
            className="FormInput"
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={({ target }) => setemail(target.value)}
            required
            autoComplete="true"
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
            Signin
          </button>

          <h3 className="text">
            Already a user?
            <NavLink to="/Sign_in" className="link">
              Sign In Here
            </NavLink>
          </h3>
          <h4 className="smalltext">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </h4>
        </form>
        <div className="brk"></div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}
