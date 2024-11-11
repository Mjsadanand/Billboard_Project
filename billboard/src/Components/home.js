import React from 'react'
import { BsBadge8K, BsBroadcast, BsCart3, BsFillEnvelopeCheckFill, BsFillHouseExclamationFill, BsFingerprint, BsGrid1X2Fill, BsGrid3X2GapFill, BsHouses, BsInfo, BsKanban, BsPeople, BsFillPersonVca, BsBook, BsAmazon, BsMicrosoft, BsAward } from 'react-icons/bs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data for the chart
const data = [
  { name: '2019', Contract: 102, amt: 102 },
  { name: '2020', Contract: 98, amt: 98 },
  { name: '2021', Contract: 110, amt: 110 },
  { name: '2022', Contract: 78, amt: 78 },
  { name: '2023', Contract: 120, amt: 120 },
  { name: '2024', Contract: 160, amt: 160 },
];
export default function home() {
  return ( 
    <main className='main-container'>
     <div>
      <h2>
        DASHBOARD
      </h2>
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
     <ResponsiveContainer width="70%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Contract" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer width="70%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Contract" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
     </div>
    </main>
  )
}
