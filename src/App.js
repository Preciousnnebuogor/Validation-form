
import './App.css';

import Location from './page/location';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalData from './components/personaldata';



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<PersonalData />} />
        <Route path="/location" element={<Location />} />
        {/* <Route path="/education" element={<Education />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
