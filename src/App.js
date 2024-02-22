import Nav from "./Components/layout/navbar"; //navbar for every page
import Footer from "./Components/layout/Footer"; // footer for every page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //for making one page without loading go to oth
import Register from "./Pages/Register";
import Event1 from "./Pages/Event1";
import Home from "./Pages/Home";
import News from "./Pages/News";
import { useEffect, useState } from "react";
import Alumni from "./Pages/Alumni";


function App() {
  const [Visitors, setVisitors] = useState(0);

  useEffect(()=>{
    const storedCount = localStorage.getItem("visitors");
    const initialCount = Number(storedCount) || 0;
    setVisitors(initialCount+1);
    localStorage.setItem("visitors",initialCount+1);
  },[])

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
        <Footer visitors={Visitors} />
      </Router>
    </>
  );
}

export default App;
