import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Branches from './Components/Branches';
import Customer from './Components/Customer';
import Property from './Components/Property';
import Location from './Components/Location';
import Staff from './Components/Staff';
import Invoice from './Components/Invoice';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("User logged in, isAuthenticated set to true"); // Debug log
  };

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: '/',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Home />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/branch',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Branches />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/cust',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Customer />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/prop',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Property />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/loc',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Location />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/staf',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Staff />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: '/invoice',
      element: isAuthenticated ? (
        <>
          <Sidebar />
          <Invoice />
        </>
      ) : (
        <Navigate to="/login" replace />
      ),
    },
  ]);

  return (
    <div className="grid-container">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
