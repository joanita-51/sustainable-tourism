import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@pangeacyber/react-auth';
import Home from './Pages/Home';
import UserDashboard from './Pages/Dashboard';

function App() {
  const { authenticated, loading, error } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} {console.log(error)}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {authenticated?
          (
            <Route path="/dashboard" element={<UserDashboard />} />
          ):(
            <Route path="/" element={<Home />} />
          )
        }


      </Routes>
    </BrowserRouter>
  );
}

export default App;
