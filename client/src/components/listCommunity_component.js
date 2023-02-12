import React, { useState, useEffect } from 'react'
import CommunityService from "../services/community.service";
import "../styles/listing.css"

const ListCommunity = (props) => {
  let { data, currentUser, setCurrentUser } = props;

  return (
    <div className="row" id="listing">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        
        {
          data.map((community) => 
            (<div className="col">
              <div className="card text-center mb-4 communityCard">
                <div className="card-body">
                  <a>hello</a>
                  <h5 className="card-title">{community.location}</h5>
                  <p className="card-text">{community.description}</p>
                  <a href="#" className="btn btn-primary">JOIN</a>
                </div>
              </div>
            </div>)
          )}
      </div>
    </div>
  )
}

const ListCommunityComponent = (props) => {

  const [data, setData] = useState([]);

  //get data from DB
  const getData = () => {
    CommunityService.getAll()
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>dddd</p>
      <div className="container" id="communityList">
        <ListCommunity data={data} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />
      </div>
    </div>
  )
}

export default ListCommunityComponent