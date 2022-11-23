 import Buy from './pages/Buy';
import Navbar from './components/Navbar';
 import Sell from './pages/Sell';
 import Privacy from './pages/Privacy';
import { Routes, Route} from "react-router-dom";
import "./App.css";
import ProtectedUser from './components/ProtectedUser'
import LoginWithMessage from './pages/LoginWithMessage'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddHome from './services/AddHome';
import EditHome from './services/EditHome';
import ViewHome from './services/ViewHome';
import Wishlist from './pages/Wishlist';
import UserDetails from './pages/UserDetails'
import HomePage from './pages/HomePage'
import { useState } from 'react';
import AboutUs from './pages/AboutUs';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Protected from './components/Protected';
const App = () => { 
  const [query,setQuery] = useState("");
  return (
    <div>
      <Navbar setQuery={setQuery}/>
      <div className="">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/login" element={<Protected Component = {Login}/>} />
          <Route path='/loginmsg' element={<Protected Component = {LoginWithMessage}/>}></Route>
          <Route path="/signup" element={<Protected Component = {Register}/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/sell' element={<Sell/>}/>
          <Route path='/buy' element={<Buy query={query}/>}/>
          <Route path='/userdetails' element={<ProtectedUser Component={ UserDetails}/>}/>
          <Route path="/addhome/:id" element={<AddHome/>} />
          <Route path="/edithome/:id" element={<ProtectedUser Component={EditHome}/>} />
          <Route path="/viewhome/:id" element={<ViewHome/>} />
          <Route path='/wishlist/:id' element={<Wishlist/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
      </div>

    </div>
  );
};

export default App;