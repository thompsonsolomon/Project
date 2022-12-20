import React, { useEffect, useState } from "react";
import logo from "../../components/image/Netflix-Logo.svg";
import "./row.css";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuthListener from "../../helpers/UseAuthListener";

export default function Nav() {
  const { user } = UseAuthListener();
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const headerScrol = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", headerScrol);

    return () => {
      window.removeEventListener("scroll", headerScrol);
    };
  }, []);


  const demo2 = JSON.parse(localStorage.getItem("photoUrl"));

  const showProfile = () => {
    Swal.fire({
      title: "Hey!",
      text: "Current user is " + user.displayName,
      imageUrl: "./users/" + user.photoURL,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "User image",
    });
  };
  return (
    <div className={`Browsenavcon ${show && "nav__black"}`}>
      <NavLink to="/" className="logo">
        <img src={logo} alt="" className="logo" />
      </NavLink>

      <div onClick={showProfile} className="profile">
        {user && user.photoURL ? (
          <img src={"./users/" + user.photoURL} alt={`${user.displayName}profileImage`} />
        ) : (
          <img src="./users/1.png" alt={demo2} />
        )}
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=peG3lX2KihY

// window.navigator.vibrate([300, 100, 300]);
