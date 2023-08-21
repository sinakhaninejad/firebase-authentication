import React, { useState, useEffect } from "react";
import { useAuthValue } from "../contexts/AuthContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function HomePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const hadleLogout = () => {
    console.log("click");
    signOut(auth)
      .then(() => {
        console.log("signed out");
        setUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? <h1>{user.email}</h1> : <h1>not logged in</h1>}
      <h1 className="text-3xl">Home Page</h1>
      {user ? (
        <button onClick={hadleLogout}>Logout</button>
      ) : (
        <a href="/firebase-authentication/signin">log in</a>
      )}
    </div>
  );
}

export default HomePage;
