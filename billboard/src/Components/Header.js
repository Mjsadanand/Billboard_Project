import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsEnvelope, BsEnvelopeFill} from 'react-icons/bs'

export default function Header() {
  return (
      <header className='header'>
        <div className='menu-icon'>
          <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
          <BsSearch className='icon'/>
        </div>
        <h2>BillBoard Management System</h2>
        <div className='header-right'>
          <BsFillBellFill className='icon'/>
          <BsEnvelopeFill className='icon'/> 
          <BsPersonCircle className='icon'/>
        </div>
      </header>
  )
}
