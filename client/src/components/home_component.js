import {React, useState, useEffect} from 'react';
import HomeP1Component from './home_p1_component';
// import HomeP2Component from './home_p2_component';
// import HomeP3Component from './home_p3_component';
// import DetailComponent from './detail_component';
// import CardComponent from './card_component';
import "../styles/home.css";


const HomeComponent = () => {
  const [isClick, setClick] = useState({click: false, id:"-1"});
  const [data,setData]=useState([]);
  const getData=()=>{
      fetch('properties.json'
      ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
      });
  }
  useEffect(()=>{
      getData()
  },[])

  return (
    <div>
      <div className="container-fluid fill p1">
        <HomeP1Component />
        {/* <div className='container'>
          <ListProperties properties={data} isClick={isClick} setClick={setClick}/>
        </div> */}
      </div>
    </div>
  )
}

export default HomeComponent