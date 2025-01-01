
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
// import './App.css';
import LandingPage from '../components/Landingpage';
// import StudentDashboard from '../components/StudentDashboard';
// import DonorDashboard from '../components/DonorDashboard';
import Login from '../components/login';
import Register from '../components/Register';
function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Uncomment and add paths for additional pages */}
          {/* <Route path="/student" element={<StudentDashboard />} /> */}
          {/* <Route path="/donor" element={<DonorDashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    
  );
}

export default App;
