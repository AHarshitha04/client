import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home'
import Paper from './Pages/Paper/Paper'
import SubjectTest from './Pages/SubjectTest/SubjectTest'
import FullTest from './Pages/FullTest/FullTest'
import ChapterTest from './Pages/ChapterTest/ChapterTest'
import PreviousTest from './Pages/PreviousTest/PreviousTest'



function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/Paper' element={<Paper seconds={600} />} />
        <Route path='/SubjectTest' element={<SubjectTest/>} />
        <Route path='/FullTest' element={<FullTest />} />
        <Route path='/ChapterTest' element={<ChapterTest />} />
        <Route path='/PreviousTest' element={<PreviousTest />} />
       </Routes>
    </BrowserRouter>

  );
}

export default App;
