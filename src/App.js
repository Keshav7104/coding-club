import Nav  from './Components/layout/navbar'; //navbar for every page
import Footer from './Components/layout/Footer';// footer for every page
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';//for making one page without loading go to other page
import { useState,createContext } from 'react';//to pass information among pages
import Register from './Pages/Register';
import Event1 from './Pages/Event1';
import Home from './Pages/Home';
// import Admin from './Pages/Admin';//different pages of our site
import News from './Pages/News';

export const Info = createContext();//context to pass only those value which are meant to used in that page not all info

function App() {

  const [isadmin, setIsadmin] =useState(0);//0 if user is not admin 1 if user is admin
  const [id,setId] = useState("");//to hold the value of admin id
  return (
    <>
      {/* <Info.Provider value={{isadmin, setIsadmin,id,setId}}>
      <Router>
      <Nav />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/events" element={<Event1 />}/>
        {/* <Route path='/Admin' element={<Admin />} /> */}
        <Route path='/News' element={<News />} />
        <Route path='*' element={<h1>Sorry,you connected to wrong wire</h1>} />
        
      </Routes>

      <Footer></Footer>
      </Router>
      </Info.Provider> */}
      <footer></footer>
      </>
  );
}

export default App;
