import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EventService from '../services/event.service';


const PartiEventComponent = (props) => {
    let { currentUser, setCurrentUser } = props;
    const navigate = useNavigate();

    const handleTakeToLogin = () => {
        navigate("/login");
      };
    
    let [eventData, setPEventData] = useState(null);

    useEffect(() => {
        console.log("Using effect.");
        let _id;
        if (currentUser) {
          _id = currentUser.user._id;
        } else {
          _id = "";
        }

        if (currentUser.user.role === "admin") {
          PropertyService.get(_id)
            .then((data) => {
              console.log(data);
              setPropertyData(data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (currentUser.user.role === "guest") {
          PropertyService.getFavorites(_id)
            .then((data) => {
              console.log(data);
              setPropertyData(data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, []);

      // try
      const handleUnFav = (e) => {
        PropertyService.removeFav(e.target.id, currentUser.user._id)
        .then(() => {
          window.alert("Remove from Favorite");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    //delete
    const handleDelete = (e) => {
      PropertyService.deleteProperty(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Delete property!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    };

    // edit
    const handleEdit = (e) => {
      PropertyService.editProperty(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Redirecting to Edit Page");
        navigate("/propertyEdit");
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
        <div style={{ padding: "3rem" }}>
            {!currentUser && (
                <div>
                <p>You must login before seeing your properties.</p>
                <button
                    onClick={handleTakeToLogin}
                    className="btn btn-primary btn-lg"
                >
                    Take me to login page
                </button>
                </div>
            )}

            <div>
            <h1>Have Fun!</h1>
            <h2>Here's all the events you participate in.</h2>
            </div>

            {currentUser && eventData && eventData.length != 0 && (
                <div>
                    <p>Here's your properties.</p>
                    {propertyData.map((property) => (
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                            <img src={`data:image/jepg;base64,${property.image}`} alt="property" width={"250rem"} height={"250rem"} />
                                <h5 className="card-title">{property.title}</h5>
                                <h3>{property.city}</h3>
                                <p className="card-text">{property.description}</p>
                                <p className="card-text">$ {property.price} per day</p>
                                <Link to={`/editproperty/${property._id}`} className="btn btn-secondary">Edit</Link>
                                <button onClick={handleDelete} className="btn btn-primary" id={property._id}>Delete</button>
                                <br />
                            </div>
                        </div>
                    ))}
                </div>
            )}
             {currentUser && currentUser.user.role === "guest" && propertyData && propertyData.length != 0 && (
                <div>
                    <p>Here's your favorite places.</p>
                    {propertyData.map((property) => (
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                            <img src={`data:image/jepg;base64,${property.image}`} alt="property" width={"250rem"} height={"250rem"} />
                                <h5 className="card-title">{property.title}</h5>
                                <h3>{property.city}</h3>
                                <p className="card-text">{property.description}</p>
                                <p className="card-text">$ {property.price} per day</p>
                                <button onClick={handleUnFav} className="btn btn-primary" id={property._id}>Remove from Favorites</button>
                                <br />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PropertyComponent;