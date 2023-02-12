import EventComponent from "./event_component";
import ListEvent from "./listEvent_component";
import { useState, useEffect } from "react";
import CommunityService from "../services/community.service";

const CommunityComponent = (props) => {
    let { currentUser, setCurrentUser } = props;

    console.log(currentUser);

    const [event, setEvent] = useState([]);

    //get data from DB
    const getData = () => {
        CommunityService.getEvents()
            .then((event) => {
                console.log(event);
                setEvent(event.data);
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
            {
                currentUser.user.community === null && (
                    <div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>

                        <a className="dropdown-item" href="/list">Join a Community</a>
                        <a className="dropdown-item" href="/create">Create a Community</a>
                    </div>
                )
            }

            {currentUser.user.community !== null && (
                <div className="container" id="eventList">
                    <ListEvent data={event} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />
                </div>
            )}

        </div>
    )
}

export default CommunityComponent