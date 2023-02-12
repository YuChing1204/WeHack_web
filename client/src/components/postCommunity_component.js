import React, { useState } from "react";
import CommunityService from "../services/community.service";
import { useNavigate } from "react-router-dom";

const PostCommunityComponent = (props) => {
    let [location, setLocation] = useState("");
    let [description, setDescription] = useState("");
    let [message, setMessage] = useState("");

    const navigate = useNavigate();
    
    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const postCommunity = (e) => {
      CommunityService.createCommunity(
          location,
          description,
        )
          .then(() => {
            window.alert("New community has been created.");
            navigate("/community");
          })
          .catch((error) => {
            console.log(error.response);
            setMessage(error.response.data);
            window.alert(message);
          });
      };

    return (
      <div style={{ padding: "3rem" }}>
        <div className="form-group">
            <label>
            Location:
            </label>
            <input
              name="location"
              type="text"
              className="form-control"
              id="location"
              onChange={handleChangeLocation}
            />
            <p></p>
            <label>
            Description:
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="description"
              onChange={handleChangeDescription}
            />
            <p></p>
            <button className="btn btn-secondary" onClick={postCommunity}>
              Submit
            </button>
        </div>
        </div>
    );
}

export default PostCommunityComponent