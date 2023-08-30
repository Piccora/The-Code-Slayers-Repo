import Layout from './components/ui/Layout'
import Login from './pages/Login/Login'
import Homepage from './pages/Homepage/Homepage'
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
export default function App() {
  useEffect(()=>{
    console.log("Welcome")
  },[])
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="Login" element={<Homepage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
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
