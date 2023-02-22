import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';


function App() {

  return (
    <div>
      <Router>
      <div><Nav /></div>
      <Routes>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer></Footer>
      </Router>
      </div>
  );
}

export default App;
