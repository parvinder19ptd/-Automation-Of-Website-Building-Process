
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
