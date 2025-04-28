import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import RentalList from './components/RentalList'
import AddRental from './components/AddRental'
import EditRental from './components/EditRental'
import RentalSummary from './components/RentalSummary'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RentalList/>}/>
        <Route path="/rent" element={<AddRental/>}/>
        {/* <Route path="/edit/:id" element={<EditRental/>}/>
        <Route path="/summary" element={<RentalSummary/>}/> */}

      </Routes>
    </Router>

      
    
  );
}

export default App
