import React from 'react'
import { BsBadge8K, BsBroadcast, BsCart3, BsFillEnvelopeCheckFill, BsFillHouseExclamationFill, BsFingerprint, BsGrid1X2Fill, BsGrid3X2GapFill, BsHouses, BsInfo, BsKanban, BsPeople, BsFillPersonVca, BsBook, BsAmazon, BsMicrosoft } from 'react-icons/bs'

export default function sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsMicrosoft className='icon'/> Admin Panel
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'><a href="">
          <BsGrid1X2Fill className='icon'/>  DashBoard</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsBroadcast className='icon'/>  Branches</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsPeople className='icon'/>  Customer</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsHouses className='icon'/>  Property</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsHouses  className='icon'/>  Location</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsPeople className='icon'/>  Staff</a></li>
        <li className='sidebar-list-item'><a href="">
          <BsFingerprint className='icon'/>  Invoice</a></li>
      </ul>
    </aside>
  )
}
