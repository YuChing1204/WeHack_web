import React, { useState, useEffect } from 'react'
import CommunityService from "../services/community.service";
import { useNavigate } from 'react-router-dom';
import "../styles/listing.css"

const ListCommunity = (props) => {
  let { data, currentUser, setCurrentUser } = props;
  const navigate = useNavigate();

  const joinCommunity = (e) => {
    console.log(e.target.id);
    CommunityService.joinCommunity(e.target.id, currentUser.user._id)
    .then(() => {
      window.alert("Join Community");
      console.log("ListCommunity");
      console.log(currentUser)
      navigate("/community");
    })
    .catch((err) => {
      console.log(err);
    });
  };

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
                  <button className="btn btn-secondary" onClick={joinCommunity} id={community._id}>
                    Join
                  </button>
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
      <div className="container" id="communityList">
        <ListCommunity data={data} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />
      </div>
    </div>
  )
}

export default ListCommunityComponent