

import './App.css'
import React from 'react'
import Navbar from './component/navbar'
import Landing1 from './component/landing1'
import Landing2 from './component/landing2'
import Campus from './component/campus'
import Browsegigs from './component/browsegigs'
import Postgigs from './component/postgigs'
import Profile from './component/profile'
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
</Routes>
        </Router>
        
    );


  
}

export default App
