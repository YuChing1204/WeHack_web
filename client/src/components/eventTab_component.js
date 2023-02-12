import { useEffect, useState } from "react";
import CommunityService from "../services/community.service";

const EventTab = (props) => {
    let { currentUser, setCurrentUser } = props;
    let [eventData, setEventData] = useState(null);

    useEffect(() => {
        console.log("Using effect.");
        let _id;
        if (currentUser) {
            _id = currentUser.user._id;
        } else {
            _id = "";
        }

        if (currentUser.user !== null) {
            CommunityService.getJoinEvents(_id)
                .then((data) => {
                    console.log(data);
                    setEventData(data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const handleQuit = (e) => {
        CommunityService.quitEvent(e.target.id, currentUser.user._id)
        .then(() => {
          window.alert("Quit the event");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    };



    return (
        <div>
            <p>Here's your upcomming events.</p>
            {eventData.map((event) => (
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <h3>{event.location}</h3>
                        <p className="card-text">{event.description}</p>
                        <p className="card-text">{event.date}</p>
                        <button onClick={handleQuit} className="btn btn-primary" id={event._id}>Not interested anymore</button>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    )

}

export default EventTab
