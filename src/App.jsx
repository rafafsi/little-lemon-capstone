import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Order from "./views/Order";
import About from "./views/About";
import Reservation from "./views/Reservation";
import Login from "./views/Login";

const App = () => {
  return(
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/reservation" element={ <Reservation />} />
            <Route path="/order" element={ <Order />} />
            <Route path="/login" element={ <Login />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )    
}

export default App;
