
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../components/Landingpage';

import AdminPanel from '../components/AdminDashboard';
import DonorDashboard from '../components/DonerDashboard';
import Login from '../components/login';
import Register from '../components/Register';
import StudentDashboard from '../components/StudentDashboard';
function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Uncomment and add paths for additional pages */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    
  );
}

export default App;
