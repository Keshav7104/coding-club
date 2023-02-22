import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Register from './Components/layout/Register';

// import Events from './Pages/Events';

function App() {

  return (
    <div>
      <Router>
      <div><Nav /></div>
    
      {/* <Events></Events> */}
      <Routes>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer></Footer>
      </Router>
      </div>
  );
}

export default App;
