import './App.css';
import Mainhome from './Components/MainHome/Mainhome';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Mainhome/>
      </div>

    </>
  );
}

export default App;
