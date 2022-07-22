import logo from './logo.svg';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import RightDrawer from './Components/RightSideDrawer/RightDrawer';
import MainHome from './Components/MainHome/MainHome';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container  pt-4">
          <RightDrawer />
          <MainHome />
        </div>
        <Footer />
    </div>
  );
}

export default App;
