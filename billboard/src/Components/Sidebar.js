import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBroadcast,  BsFingerprint, BsGrid1X2Fill,  BsHouses,  BsPeople,  BsMicrosoft } from 'react-icons/bs';

export default function Sidebar() {
  // Add state for handling sidebar visibility if needed
  // const [isOpen, setIsOpen] = React.useState(true);
  
  // Function to handle close
  const handleClose = () => {
    // You can implement the logic to close the sidebar here
    console.log('Sidebar closed');
  };

  return (
    <aside id='sidebar'> 
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsMicrosoft className='icon'/> Admin Panel
        </div>
        <span className='icon close_icon' onClick={handleClose}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink to="/"  className={({ isActive }) => (isActive ? 'red' : '')} >
            <BsGrid1X2Fill className='icon'/>  DashBoard
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/branch" className={(e)=>{return e.isActive?"red":""}} >
            <BsBroadcast className='icon'/>  Branches
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/cust" className={(e)=>{return e.isActive?"red":""}} >
            <BsPeople className='icon'/>  Customer
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/prop"  className={(e)=>{return e.isActive?"red":""}}>
            <BsHouses className='icon'/>  Property
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/loc" className={(e)=>{return e.isActive?"red":""}} >
            <BsHouses className='icon'/>  Location
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/staf" className={(e)=>{return e.isActive?"red":""}} >
            <BsPeople className='icon'/>  Staff
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/invoice" className={(e)=>{return e.isActive?"red":""}} >
            <BsFingerprint className='icon'/>  Invoice
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
