import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import RefundPolicy from './component/RefundPolicy'
import TermsCondition from './component/TermsCondition'
import PrivacyPolicy from './component/PrivacyPolicy'
import Home from './component/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App