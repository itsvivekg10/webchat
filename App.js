import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import "./style.scss";

function App() {
  const [user, setUser] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      console.log(userData);
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Register
              displayName={displayName}
              setDisplayName={setDisplayName}
              file={file}
              setFile={setFile}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              file={user.file || file}
              displayName={user.displayName || displayName}
              photoURL={user?.photoURL || user?.reloadUserInfo?.photoUrl}
            />
          } // Pass email as a prop
        />
      </Routes>
    </Router>
  );
}

export default App;
