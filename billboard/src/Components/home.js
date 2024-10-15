import React from 'react'
import { BsBadge8K, BsBroadcast, BsCart3, BsFillEnvelopeCheckFill, BsFillHouseExclamationFill, BsFingerprint, BsGrid1X2Fill, BsGrid3X2GapFill, BsHouses, BsInfo, BsKanban, BsPeople, BsFillPersonVca, BsBook, BsAmazon, BsMicrosoft, BsAward } from 'react-icons/bs'
export default function home() {
  return ( 
    <main className='main-container'>
     <div>
      <h3>
        DASHBOARD
      </h3>
     </div>
     <div className='main-cards'>
      <div className="cards">
          <div className='card-inner'>
            <h3>BILLBOARDS</h3>
            <BsAward className='icon'/>
          </div>
          <h2>20</h2>
      </div>
      <div className="cards">
          <div className='card-inner'>
            <h3>PROPERTY</h3>
            <BsAward className='icon'/>
          </div>
          <h2>20</h2>
      </div>
      <div className="cards">
          <div className='card-inner'>
            <h3>STAFF</h3>
            <BsAward className='icon'/>
          </div>
          <h2>20</h2>
      </div>
      <div className="cards">
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsAward className='icon'/>
          </div>
          <h2>20</h2>
      </div>
     </div>
     <div className='charts'>

     </div>
    </main>
  )
}
