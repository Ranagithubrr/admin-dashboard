import './App.css';
import Mainhome from './Components/MainHome/Mainhome';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import { Routes, Route } from "react-router-dom";
import Analytics from './Components/Pages/Analytics/Analytics';
import { useState } from 'react';
import User from './Components/Pages/User/User';
// import MyDrawer from './Components/Drawer/Drawer';


function App() {

  const [sideClass, setSideClass] = useState('sidebarArea');
  const SideBarClass = () => {
    sideClass === 'sidebarArea' ? setSideClass('minisidebar') : setSideClass('sidebarArea');
  }
  return (
    <>

      <Topbar />
      <div className="container">
        <div className={sideClass}>
          <Sidebar MiniLeft={SideBarClass} />
        </div>

        <div className="main-center-area">
          <Routes>
            <Route path="/" element={<Mainhome />} />
            <Route path="/home" element={<Mainhome />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<User />} />
          </Routes>

        </div>


      </div>

      {/* <MyDrawer /> */}
    </>
  );
}
export default App;
