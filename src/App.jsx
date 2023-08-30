import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import OptionCreate from './pages/OptionCreate/OptionCreate';
import { NavbarDefault } from './components/ui/Navbar/Nav';
import { CreateCourse } from './pages/CreateCourse/CreateCourse';
import { CreateLessons } from './pages/CreateLessons/CreateLessons';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/nav" element={ <NavbarDefault />} />
      <Route path="/opt" element={ <OptionCreate />} />
      <Route path="/create-course" element={<CreateCourse />} />
      <Route path="/create-lessons" element={<CreateLessons />} />
    </Routes>
    </>
  );
}
