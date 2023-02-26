import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
// import Events from './Pages/Events';
import Event1 from './Pages/Event1';
import { useState,createContext } from 'react';
// import News from './Pages/News';
import  pdf from '../src/Components/pdfs/pdf1.pdf'

export const Admin = createContext();

function App() {

  const [isadmin, setIsadmin] =useState(0);

  return (
    <div>
      <Admin.Provider value={{isadmin, setIsadmin}}>
      <Router>
      <Nav />
      <Routes>
      
        <Route path="/register" element={<Register />}/>
        <Route path="/events" element={<Event1 />}/>
        <Route path="/Components/pdfs/pdf1.pdf" element={pdf} />
        
      </Routes>

      <Footer></Footer>
      </Router>
      </Admin.Provider>
      </div>
  );
}

export default App;
