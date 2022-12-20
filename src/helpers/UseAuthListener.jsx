import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect,  } from 'react';
import { auth } from '../context/firebase.prod';

export default function UseAuthListener() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);


  // useEffect(() => {
  //   const listener = firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       localStorage.setItem('authUser', JSON.stringify(authUser));
  //       setUser(authUser);
  //     } else {
  //       localStorage.removeItem('authUser');
  //       setUser(null);
  //     }
  //   });

  //   return () => listener();
  // }, []);

  return { user };
}



