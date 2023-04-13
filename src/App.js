import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Profile from './components/profile';
import UserLogin from './components/userLogin';
import UserRegister from './components/userRegister';
import NavBar from './components/navBar';
import Template from './components/template';
import Service from './components/service';
import Testmonials from './components/testmonials';
import Testimonials from './components/testmonials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
          <Route path="/userregister" element={<UserRegister/>} />
          <Route path="/header" element={<NavBar/>} />
          <Route path="/template" element={<Template/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
