import './App.css';

import { Route , Routes } from 'react-router-dom';


import Content from './components/ContentComponent/Content';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Banner from './components/BannerComponent/Banner';
import Admin from './components/AdminComponen/Admin';
import User from './components/UserComponer/User';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageusersComponent/Manageusers';


function App() {

  return (
    <>

    <Header />

    <Nav />

    <Banner />

    <Routes>
        <Route path="/" element={<Content />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/user" element={<User />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/manageusers" element={<Manageusers />} ></Route>
    </Routes>    

    <Footer />
 
    </>
  );
}

export default App;
