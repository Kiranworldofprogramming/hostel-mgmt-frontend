import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import { Navbar } from './components/Navbar';

import GetStudent from './components/GetStudent';
import Home from './components/Home';
import StudentNumber from './components/StudentNumber';
import Footer from './components/Footer';
import FindStudent from './components/FindStudent';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/getStudent' element={<GetStudent />} />
        <Route path='/number' element={<StudentNumber />} />
        <Route path='find' element={<FindStudent />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
