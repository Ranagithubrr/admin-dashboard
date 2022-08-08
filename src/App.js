import logo from './logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import RightDrawer from './Components/RightSideDrawer/RightDrawer';
import MainHome from './Components/MainHome/MainHome';
import Footer from './Components/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
        <Navbar />
        <RightDrawer />
        <div className="container  pt-4 mt-5">
          <Routes>
          <Route path="/" element={<MainHome />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          </Routes>
          
          
        </div>
        <Footer />
    </div>
  );
}

export default App;
