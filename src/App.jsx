import Logo from './assets/Logo.png'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='container-fluid p-0 m-0'>
    
    <div className='row'>
      <div className="col-2 pe-0">
           <Sidebar/>
            </div>
            
            <div className="col-10 ps-0">
            <Header/>
            
      <Dashboard/>
               
                        </div>
    </div>
    </div>
  );
}

export default App;
