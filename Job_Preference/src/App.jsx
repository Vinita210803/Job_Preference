import React, { useEffect, useState } from "react";
import "./StyleSheet/App.css";
import Home from "./Componentes/Home";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Componentes/Contact";
import Navbar from "./Componentes/Navbar";
import User from "./Componentes/User.jsx";
// import Footer from "./Componentes/Footer";
// import Register from "./Componentes/Register.jsx";
import Info from "./Componentes/Info";
import Pay from "./Componentes/Pay";
import Forget from "./Componentes/Forget";
import Reset from "./Componentes/Reset";
import Login from "./Componentes/Login";
import Verification from "./Componentes/Verification";
import { Route, Navigate, Routes } from "react-router-dom";
import Register from "./Componentes/Register";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        
        {token ? (
          <>
          <Route exact path="/info" Component={Info} />
            <Route exact path="/pay" Component={Pay} />
          </>
        ) : (
          <>
            <Route path="/pay" element={<Navigate replace to="/login" />} />
            <Route path="/info" element={<Navigate replace to="/login" />} />
          </>
        )}

        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/singup" Component={Register} />
        <Route exact path="/user/:fname" Component={User} />
        <Route path="/reset_password/:id/:token" Component={Reset} />
        <Route exact path="/user/:fname" Component={User} />
        <Route exact path="/forget" Component={Forget} />

      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
};
export default App;
