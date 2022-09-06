import React, { useEffect, useState } from "react";
import logo from "../../components/image/Netflix-Logo.svg";
import "./row.css";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import { firebase } from "../../context/firebase.prod";

export default function Nav() {
  const [show, handleShow] = useState(false);
  const user =   localStorage.getItem('photoUrl');
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
  const demo = JSON.parse(localStorage.getItem("displayName"));
  const demo2 = JSON.parse(localStorage.getItem("photoUrl"));

  const showProfile = () => {
    Swal.fire({
      title: "Hey!",
      text: "Current user is " +demo ,
      imageUrl:"./images/users/" +demo2,
      imageWidth: 100,
      imageHeight: 100,   
      imageAlt: "User image",
    });
    console.log(demo)
    console.log(demo2)
  };
  return (
    <div className={`Browsenavcon ${show && "nav__black"}`}>
      <NavLink to="/" className="logo">
        <img src={logo} alt="" className="logo" />
      </NavLink>

      <div  onClick={showProfile}  className="profile">
        <img src={`/images/users/${ demo2  }`} alt={demo2}/>
        {/* <img src="/images/users/5.png" alt={demo2}/> */}
      </div>
    </div>
  );
}
