import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
      <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/'/>
      </Routes>
      <Footer></Footer>
      </Router>
  );
}

export default App;
