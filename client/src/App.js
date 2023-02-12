import React, { useState } from 'react'
import HeaderComponent from './components/header_component';
import HomeComponent from './components/home_component';
import LoginComponent from './components/login_component';
import SignupComponent from './components/signup_component';
import CommunityComponent from './components/community_component';
import PostCommunityComponent from './components/postCommunity_component';
import FooterComponent from './components/footer_component';
import ListCommunityComponent from './components/listCommunity_component';
import ProfileComponent from './components/profile_component';
import { Routes, Route } from "react-router-dom";
import AuthService from "./services/auth.service";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div className="App">
      <HeaderComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/register" element={<SignupComponent/>} />
        <Route path="/profile" element={<ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/community" element={<CommunityComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/community/create" element={<PostCommunityComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/community/list" element={<ListCommunityComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;