import Layout from './components/ui/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Homepage from './pages/Homepage/Homepage'
import Course from './pages/Course/Course'
import CoursesList from './pages/CourseListPage/CourseListPage'
import CreateEventUserPrompt from './pages/CreateEventUserPrompt/CreateEventUserPrompt'
import { Payment } from './pages/Payment/Payment'
import { CreateEvent } from './pages/CreateEvent/CreateEvent'
import { Profile } from './pages/Profile/Profile'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import {auth} from './firebase/Authentication'
import CreateCourse from './pages/CreateCourse/CreateCourse';

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
          <Route path="/CoursesList" element={<CoursesList />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/test" element={<Profile />} />
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
