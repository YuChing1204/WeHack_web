import React, { useState, useEffect } from 'react'
import CommunityService from "../services/community.service";
import "../styles/listing.css"

const ListEvent = (props) => {
  let { data, currentUser, setCurrentUser } = props;

  return (
    <div className="row" id="listing">
        <h1>Hi, {currentUser.user.name}</h1>
        <h2>Here's all the events in your neighborhood.</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        
        {
          data.map((event) => 
            (<div className="col">
              <div className="card text-center mb-4 communityCard">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <h5 className="card-title">{event.location}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">{event.date}</p>
                  <a href="#" className="btn btn-primary">JOIN</a>
                </div>
              </div>
            </div>)
          )}
      </div>
    </div>
  )
}

export default ListEvent

// const ListEventComponent = (props) => {

//   const [data, setData] = useState([]);

//   //get data from DB
//   const getData = () => {
//     CommunityService.getEvents()
//       .then((data) => {
//         console.log(data);
//         setData(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   }
//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <div>
//       <div className="container" id="eventList">
//         <ListEvent data={data} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />
//       </div>
//     </div>
//   )
// }

// export default ListEventComponent