import React, { useState } from 'react'
import HeaderComponent from './components/header_component';
import HomeComponent from './components/home_component';
import LoginComponent from './components/login_component';
import SignupComponent from './components/signup_component';
import CommunityComponent from './components/community_component';
import FooterComponent from './components/footer_component';
import { Routes, Route } from "react-router-dom";

function App() {
  // let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/register" element={<SignupComponent/>} />
        <Route path="/community" element={<CommunityComponent/>} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;