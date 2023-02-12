import EventComponent from "./event_component";

const CommunityComponent = () => {
    // let { currentUser, setCurrentUser } = props;
    // !currentUser.user.community
    let test = false;



    //     const [data,setData]=useState([]);

    //     //get data from DB
    //     const getData = () => {
    //         EventService.getAll()
    //         .then((data) => {
    //           console.log(data);
    //           setData(data.data);
    //           setFiltered(data.data);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });

    //     }

    //     useEffect(()=>{
    //         getData()
    //     },[])

    return (
        <div>
            {
                !test && (
                    <div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <div>You must belong to a community!</div>
                        <a className="dropdown-item" href="/community/list">Join a Community</a>
                        <a className="dropdown-item" href="/community/create">Create a Community</a>
                    </div>
                )
            }

            {test && (
                <div className="row" id="listing">
                    <div>
                        <div className="row col-sm-2 col-md-4 col-lg-4 g-4">
                            <EventComponent />
                        </div>
                        <div className="row col-sm-2 col-md-4 col-lg-4 g-4">
                            <EventComponent />
                        </div>
                        <div className="row col-sm-2 col-md-4 col-lg-4 g-4">
                            <EventComponent />
                        </div>
                        <div className="row col-sm-2 col-md-4 col-lg-4 g-4">
                            <EventComponent />
                        </div>
                        <div className="row col-sm-2 col-md-4 col-lg-4 g-4">
                            <EventComponent />
                        </div>
                    </div>
                </div>

            )}
        
        </div>
    )
}

export default CommunityComponent