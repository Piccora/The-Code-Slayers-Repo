import Layout from './components/ui/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Homepage from './pages/Homepage/Homepage'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import {auth} from './firebase/Authentication'
import CreateCourse from './pages/CreateCourse/CreateCourse';
import Course from './pages/CourseGUI/CourseGUI';
export default function App() {
  const [authUser,setCurrentUser]=useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={authUser?<Homepage/>:<Login/>} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/CreateCourse" element={<CreateCourse />} />
          <Route path="/Course" element={<Course />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
