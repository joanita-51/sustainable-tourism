import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from '@pangeacyber/react-auth';
import Home from './Pages/Home';
import UserDashboard from './Pages/Dashboard';

function AuthenticatedApp() {
  return (
    <UserDashboard />
  );
}

function UnauthenticatedApp() {
  return (
    <Home />

  );
}

function App() {
  const { authenticated, loading, error, user, login, logout } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return(
    <div>
      {authenticated?(
        <div>
          Logged in as {user.profile.first_name}
          <button onClick={logout}>Logout</button>
        </div>
      ): (
        <UnauthenticatedApp/>
      )}
      <BrowserRouter>
        <Routes>
          {authenticated ? (
            <Route path="/dashboard" element={<AuthenticatedApp />} />
          ) : (
            <Route path="/" element={<UnauthenticatedApp />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
