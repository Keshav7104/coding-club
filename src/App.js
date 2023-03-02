import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './Pages/Register';
import Event1 from './Pages/Event1';
import { useState,createContext } from 'react';
import Home from './Pages/Home'

export const Admin = createContext();

function App() {

  const [isadmin, setIsadmin] =useState(0);
  // setIsadmin(0);
  return (
    <div>
      <Admin.Provider value={{isadmin, setIsadmin}}>
      <Router>
      <Nav />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/events" element={<Event1 />}/>
        
      </Routes>

      <Footer></Footer>
      </Router>
      </Admin.Provider>
      </div>
  );
}

export default App;
