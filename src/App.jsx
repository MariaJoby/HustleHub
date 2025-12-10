

import './App.css'
import React from 'react'
import Navbar from './component/Navbar'

import Campus from './component/campus'
import Browsegigs from './component/browsegigs'
import Postgigs from './component/postgigs'
import Profile from './component/profile'
import Dashboard from './component/dashboard'
import Footer from './component/footer'
import Homepage from './component/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
    return(
        <Router>
<Navbar />
<Routes>
  <Route path='/' element={<Homepage />} />

  <Route path='/campus' element={<Campus />} />
  <Route path='/browsegigs' element={<Browsegigs />} />
  <Route path='/postgigs' element={<Postgigs />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/dashboard' element={<Dashboard />} />
</Routes>
<Footer />
        </Router>
        
    );


  
}

export default App
