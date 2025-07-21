
import './App.css';

import Location from './page/location';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalData from './components/personaldata';
import Education from './page/educationData';
import Others from './page/other';
import Final from './page/final';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalData />} />
        <Route path="/location" element={<Location />} />
        <Route path="/education" element={<Education />} />
        <Route path="/others" element={<Others />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
