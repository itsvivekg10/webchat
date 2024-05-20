// // import { Link } from "react-router-dom";
// // import { auth, db, storage } from "./firebase";
// // import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Fix import path
// // import { useState } from "react";
// // import { doc, setDoc } from "firebase/firestore";
// // import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// // const Register = ({ email, setEmail }) => {
// //   const [displayName, setDisplayName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [err, setErr] = useState(false);
// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword from correct import
// //       const user = auth.currentUser;

// //       const storageRef = ref(storage, displayName);

// //       const uploadTask = uploadBytesResumable(storageRef, file);

// //       uploadTask.on(
// //         (error) => {
// //           setErr(true);
// //         },
// //         () => {
// //           // Handle successful uploads on complete
// //           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
// //           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
// //             await updateProfile(res.user, {
// //               displayName,
// //               photoURL: downloadURL,
// //             });
// //           });
// //         }
// //       );
// //       if (user) {
// //         await setDoc(doc(db, "users", user.uid), {
// //           email: user.email,
// //           displayName: fname,
// //         });
// //       }
// //       window.location.href = "/home";

// //       console.log("done");
// //     } catch (err) {
// //       setErr(true);
// //     }
// //   };

// //   return (
// //     <div className="formContainer">
// //       <div className="formWrapper">
// //         <span className="logo">WEB CHAT</span>
// //         <span className="title">Register</span>
// //         <form className="form" onSubmit={handleRegister}>
// //           <input
// //             type="text"
// //             placeholder=" displayName"
// //             value={displayName}
// //             onChange={(e) => setDisplayName(e.target.value)} // Fix event handling
// //           />
// //           <input
// //             type="email"
// //             placeholder="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)} // Fix event handling
// //           />
// //           <input
// //             type="password"
// //             placeholder="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)} // Fix event handling
// //           />
// //           <input type="file" />
// //           <button type="submit">sign up</button> {/* Add type="submit" */}
// //           {err && <p>something went wrong</p>}
// //         </form>
// //         <p>
// //           You do have an account? <Link to="/login">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;

// import { Link } from "react-router-dom";
// import { auth, db, storage } from "./firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Fixed import path
// import { useState } from "react";
// import { doc, setDoc } from "firebase/firestore";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const Register = ({ displayName, setDisplayName, file, setFile }) => {
//   const [email, setEmail] = useState("");
//   // const [displayName, setDisplayName] = useState("");
//   const [password, setPassword] = useState("");
//   // const [file, setFile] = useState(null);
//   const [err, setErr] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user; // Accessing the user from the response

//       const storageRef = ref(storage, `${user.uid}/${displayName}`); // Using user's uid for storage reference

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => {
//           setErr(true);
//         },
//         () => {
//           // Handle successful uploads on complete
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             await updateProfile(user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//           });
//         }
//       );

//       if (user) {
//         await setDoc(doc(db, "users", user.uid), {
//           email: user.email,
//         });
//         console.log(user);
//       }

//       window.location.href = "/home";

//       console.log("done");
//     } catch (err) {
//       setErr(true);
//     }
//   };

//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">WEB CHAT</span>
//         <span className="title">Register</span>
//         <form className="form" onSubmit={handleRegister}>
//           <input
//             type="text"
//             placeholder="Display Name"
//             value={displayName}
//             onChange={(e) => setDisplayName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//           <button type="submit">Sign up</button>
//           {err && <p>Something went wrong</p>}
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { Link } from "react-router-dom";
import { auth, db, storage } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = ({ displayName, setDisplayName, file, setFile }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const storageRef = ref(storage, `${user.uid}/${displayName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
        });
      }

      window.location.href = "/home";
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WEB CHAT</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit">Sign up</button>
          {err && <p>Something went wrong</p>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
