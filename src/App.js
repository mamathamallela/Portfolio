// // App.js
// import React from 'react';
// import Navbar from './Component/Navbar'; // adjust the path if needed
// import Introduction from './Component/Introduction';
// import Project from './Component/Project';
// import Skill from './Component/Skill';
// import Experience from './Component/Experience';
// import Contact from './Component/Contact';
// import './App.css'; // optional: your main App styles

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Introduction />
//       <Project />
//       <Skill />
//       <Experience />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Introduction from './Component/Introduction';
import Projects from './Component/Project';
import Skills from './Component/Skill';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Education from './Component/Education';
// import Home from './Component/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Introduction />} />
          <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

