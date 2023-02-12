import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import EventService from "../services/event.service";

const PostEventComponent = (props) => {
    let { currentUser, setCurrentUser } = props;

    let [title, setTitle] = useState("");
    let [location, setLocation] = useState("");
    let [description, setDescription] = useState("");
    let [date, setDate] = useState(new Date());
    
    const navigate = useNavigate();
    const handleTakeToLogin = () => {
        navigate("/login");
    };
    const handleChangeTitle = (e) => {
      setTitle(e.target.value);
    };

    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
      };

    const handleChangeDesciption = (e) => {
        setDescription(e.target.value);
    };

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    };


    const postEvent = () => {
      EventService.post(
        title,
        location,
        description,
        date)
        .then(() => {
          window.alert("New event has been posted.");
          navigate("/event");
        })
        .catch((error) => {
          console.log(error.response);
          setMessage(error.response.data);
        });
    };
  
    return (
      <div style={{ padding: "3rem" }}>
        {!currentUser && (
          <div>
            <p>You must login first before posting a new event.</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={handleTakeToLogin}
            >
              Take me to login page.
            </button>
          </div>
        )}
        {currentUser && (
          <div className="form-group">
            <label for="titleOfPost">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="titleOfPost"
              onChange={handleChangeTitle}
            />
            <br />
            <label for="locationOfPost">Location</label>
            <input
              name="location"
              type="text"
              className="form-control"
              id="addressOfPost"
              onChange={handleChangeLocation}
            />
            <br />
            <label for="descriptionOfPost">Description</label>
            <textarea
              className="form-control"
              id="descriptionOfPost"
              aria-describedby="emailHelp"
              name="description"
              onChange={handleChangeDesciption}
            />
            <br />
            <label for="DateOfPost">Date</label>

            <p>Select the date:</p>
            <DatePicker 
                className="form-control"
                id="dateOfPost"
                name="date"
                selected={date} 
                onChange={(date) => handleChangeDate(date)} 
            />

            <button className="btn btn-secondary" onClick={postEvent}>
              Submit
            </button>
            <br />
            <br />
            {message && (
              <div className="alert alert-warning" role="alert">
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default PostEventComponent;
  