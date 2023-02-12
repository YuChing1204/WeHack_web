import {React, useState, useEffect} from 'react';
import HomeP1Component from './home_p1_component';
import "../styles/home.css";


const HomeComponent = () => {

  return (
    <div>
      <div className="container-fluid fill p1">
        <HomeP1Component />
      </div>
    </div>
  )
}

export default HomeComponent