import React from 'react';
import './StyleSheet/App.css';
import Home from './Componentes/Home';
import About from './Componentes/About';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Service from './Componentes/Service';
import Contact from './Componentes/Contact';
import Navbar from './Componentes/Navbar';
import User from './Componentes/User.jsx';
import Footer from "./Componentes/Footer";
import Singup from "./Componentes/Singup.jsx";
import Login from "./Componentes/Login.jsx";
import {Route, Navigate,Routes} from "react-router-dom";
import Register from './Componentes/Register';
import Createjob from './Componentes/Createjob';
const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route  exact path = "/" Component={Home}/>
    <Route exact path = "/about" Component={About}/>
    <Route exact path = "/service" Component={Service}/>
    <Route exact path = "/contact" Component={Contact}/>
    <Route exact path = "/login" Component={Login}/>
    <Route exact path = "/singup" Component={Register}/>
    <Route exact path = "/user/:fname" Component={User}/>
    
    
    <Route exact path = "/createjob" Component={Createjob}/>

<Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
{/* <Footer></Footer> */}
    </>
  )
}
export default App;
