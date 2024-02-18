import Nav from "./Components/layout/navbar"; //navbar for every page
import Footer from "./Components/layout/Footer"; // footer for every page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //for making one page without loading go to oth
import Register from "./Pages/Register";
import Event1 from "./Pages/Event1";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Alumni from "./Pages/Alumni";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Event1 />} />
          <Route path="/News" element={<News />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="*" element={<h1>Sorry,you connected to wrong wire</h1>} />
        </Routes>

        <Footer></Footer>
      </Router>
      <footer></footer>
    </>
  );
}

export default App;
