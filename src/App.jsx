import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import OptionCreate from './pages/OptionCreate/OptionCreate';
import { NavbarDefault } from './components/ui/Nav';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/nav" element={ <NavbarDefault />} />
      <Route path="/opt" element={ <OptionCreate />} />
    </Routes>
    </>
  );
}
