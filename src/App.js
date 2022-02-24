import './App.css';
import Mainhome from './Components/MainHome/Mainhome';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import { Routes, Route } from "react-router-dom";
import Analytics from './Components/Pages/Analytics/Analytics';

function App() {
  return (
    <>
      <Topbar />


      <div className="container">
        <div className="sidebarArea">
        <Sidebar />
        </div>
        
       <div className="main-center-area">
       <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/home" element={<Mainhome/>} />
          <Route path="/analytics" element={<Analytics/>} />
          
        </Routes>
       </div>
        
        {/* <Mainhome/> */}
      </div>

    </>
  );
}

export default App;
