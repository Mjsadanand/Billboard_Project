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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Sidebar />
        <Home />
      </>
    ),
  },
  {
    path: '/branch',
    element: (
      <>
        <Sidebar />
        <Branches />
      </>
    ),
  },
  {
    path: '/cust',
    element: (
      <>
        <Sidebar />
        <Customer />
      </>
    ),
  },
  {
    path: '/prop',
    element: (
      <>
        <Sidebar />
        <Property />
      </>
    ),
  },
  {
    path: '/loc',
    element: (
      <>
        <Sidebar />
        <Location />
      </>
    ),
  },
  {
    path: '/staf',
    element: (
      <>
        <Sidebar />
        <Staff />
      </>
    ),
  },
  {
    path: '/invoice',
    element: (
      <>
        <Sidebar />
        <Invoice />
      </>
    ),
  },
]);

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
