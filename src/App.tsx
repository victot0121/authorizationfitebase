import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';
import FooterSection from './Components/Footer/FooterSection';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={isFirstVisit ? <Navigate to="/firstpage" /> : <Navigate to="/home" />} />
          </Routes>
          <FooterSection />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
