import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/home';
import ContactUs from './Component/contact-us';
import Services from './Component/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;