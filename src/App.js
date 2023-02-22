import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

// import Events from './Pages/Events';

function App() {

  return (
      <Router>
      <Nav></Nav>
    
      {/* <Events></Events> */}
      <Routes>
        <Route path='/'/>
      </Routes>
      <Footer></Footer>
      </Router>
  );
}

export default App;
