import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './Pages/Home'
import Errorpage from "./Pages/Errorpage";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
