import Nav  from './Components/layout/navbar';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
// import Events from './Pages/Events';


function App() {

  return (
      <Router>
      <Nav></Nav>
<<<<<<< HEAD
      <section>
        ednekjnfk
      </section>
      {/* <Events></Events> */}
=======
      <Routes>
        <Route path='/'/>
      </Routes>
>>>>>>> 59c35ebd667e6c03dd5ae32083458a7a7bce5f34
      <Footer></Footer>
      </Router>
  );
}

export default App;
