// import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import logo from '../../components/image/Netflix-Logo.svg'
// import photo from '../../components/image/bg.jpg'
// import "./profile.css"
// import { firebase } from "../../context/firebase.prod";



// export default function SelectProfileContainer() {

//   const user = firebase.auth().currentUser || {}
//   return (
//     <div className="ProfileCon">
//           {console.log('user i'+ user)}

//       <Link to="/" className="logo">
//         <img src={logo} alt="" className="logo" />
//       </Link>

//       <div className="profile">
//         <h1 className="profileTitle">Who's watching?</h1>
//         <li className="profilelist">
//           <div className="user">
//             <img src={ user.potoURL? user.potoURL: photo } alt={user.displayName} className="picture" />
//             <p className="profileName">{user.displayName}</p>
//           </div>
//         </li>
//       </div>
//     </div>
//   );
// }
