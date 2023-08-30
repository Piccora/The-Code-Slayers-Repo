import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import OptionCreate from './pages/OptionCreate/OptionCreate';
import { NavbarDefault } from './components/ui/Navbar/Nav';
import { CoursesList } from './pages/CourseListPage/CourseListPage'
import { Course } from './pages/Course/Course'

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/nav" element={ <NavbarDefault />} />
      <Route path="/opt" element={ <OptionCreate />} />
      <Route path="/CoursesList" element={ <CoursesList />} />
      <Route path="/Course" element={ <Course/>} />
    </Routes>
    </>
  );
}
