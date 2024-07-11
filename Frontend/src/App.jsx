import React from 'react';
import Home from './Home/Home';
import {Navigate, Route, Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Contacts from './contacts/Contacts.jsx';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/contact' element={<Contacts/>}/>
     </Routes>
     <Toaster />
    </>
  )
}

export default App
