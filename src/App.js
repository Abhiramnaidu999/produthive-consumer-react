import logo from './logo.svg';
import './App.css';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBomb,faCoffee,faCameraRetro,faHome, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar';
import About from './components/About';
import Products from './components/Products';
import { HomePage } from './components/HomePage';
import DealerProfile from './components/DealerProfile';
library.add (faBomb,faCoffee,faCameraRetro,faHome,faPeopleGroup);
 
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ProductHive</h1>
 
      </header>
      <section>
        <div style={{
          backgroundImage: "url(/images/hi.avif)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', minHeight: '140vh', minWidth: '95vw'
        }}>
 
        <Router>
          <NavBar></NavBar>
            <Routes>
                
            <Route path='/' element={<HomePage/>}></Route>
            
            <Route path='/about' element={<About/>}></Route>

              <Route path='/products' element={<Products/>}></Route>

              <Route path='/dealers' element={<DealerProfile/>}></Route>

            </Routes>
        </Router>
        </div>
      </section>
 
      <footer className = "footer">
        <p>&copy;All Rights Reserved to ProductHive.com</p>
      </footer>
    </div>
  );
}
 
export default App;
 