import React, { useState } from 'react'
import HeaderComponent from './components/header_component';
import HomeComponent from './components/home_component';
import { Routes, Route } from "react-router-dom";

function App() {
  // let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
      </Routes>
    </div>
  );
}

export default App;