

import './App.css'
import React from 'react'
import Navbar from './component/Navbar'
import Landing1 from './component/landing1'
import Landing2 from './component/landing2'
import Campus from './component/campus'
import Browsegigs from './component/browsegigs'
import Postgigs from './component/postgigs'
import Profile from './component/profile'
import Dashboard from './component/dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
    return(
        <Router>
<Navbar />
<Routes>
  <Route path='/' element={<Landing1 />} />
  <Route path='/landing2' element={<Landing2 />} />
  <Route path='/campus' element={<Campus />} />
  <Route path='/browsegigs' element={<Browsegigs />} />
  <Route path='/postgigs' element={<Postgigs />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/dashboard' element={<Dashboard />} />
</Routes>
        </Router>
        
    );


  
}

export default App
