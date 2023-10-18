import React from 'react';
import './StyleSheet/App.css';
import Home from './Componentes/Home';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from './Componentes/Contact';
import Navbar from './Componentes/Navbar';
import User from './Componentes/User.jsx';
// import Footer from "./Componentes/Footer";
// import Register from "./Componentes/Register.jsx";
import Info from './Componentes/Info';
import Pay from './Componentes/Pay';
import Login from './Componentes/Login';
import Verification from './Componentes/Verification';
import {Route, Navigate,Routes} from "react-router-dom";
import Register from './Componentes/Register';
const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route  exact path = "/" Component={Home}/>
    <Route exact path = "/info" Component={Info}/>
    <Route exact path = "/pay" Component={Pay}/>
    <Route exact path = "/contact" Component={Contact}/>
    <Route exact path = "/login" Component={Login}/>
    <Route exact path = "/singup" Component={Register}/>
    <Route exact path = "/user/:fname" Component={User}/>
    
    <Route exact path = "/singup/verification" Component={Verification}/>
    
    

<Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
{/* <Footer></Footer> */}
    </>
  )
}
export default App;
