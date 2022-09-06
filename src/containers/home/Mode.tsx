import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { firebase } from "../../context/firebase.prod";
import Swal from "sweetalert2"


export default function Mode() {

  const history = useHistory()


  const HandlelogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        
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
              title: 'Sign-out successful.' 
          })
        localStorage.removeItem("authUser");
      }).then(() =>{
        history.push("./sign_in")
      })
      .catch((error) => {
        // An error happened
        console.log(error.message)
      });
  };

  return (
    <div>
      <button onClick={() => HandlelogOut()} className="LogOutButton">
        LogOut
      </button>
    </div>
  );
}

// import React, { useState } from 'react'
// // import { firebase } from "../context/firebase"
// import './row.css'
// // import { ChangeEventHandler } from 'react'

// const setDark = () => {
//     localStorage.setItem("theme" , "dark");
//     const [ darkMode, setDarkMode] = useState(false)
// }

// const setlight = () => {
//     localStorage.setItem("theme" , "light");
//     const [ lightMode, setlightMode] = useState(false)
// }

// const storedTheme = localStorage.getItem("theme");

// const prefersDark =
//  window.matchMedia &&
// window.matchMedia("(prefers-color-scheme: dark)").matches;

// const defaultDark =
// storedTheme === "dark" || (storedTheme === null && prefersDark);

// if(defaultDark){
//     setDark();
// }

// const toggleTheme = (e) =>{
//     if (e.target.checked){
//         setDark();
//     }else{
//         setlight();
//     }
// ;}
// export default function Mode() {
//   return (
//     <div className='toggle-theme-wrapper'>
//         <span>⛅</span>
//         <label className='toggle-theme' htmlFor="checkbox">
//             <input
//             className='checkbox'
//             type="checkbox"
//              id="checkbox"
//              onChange={toggleTheme}
//              />
//         </label>
//         <span>🌒</span>
//     </div>
//   )
// }
