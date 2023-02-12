import EventComponent from "./event_component";

const CommunityComponent = () => {
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
        <div className="row" id="listing">
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
    )
}

export default CommunityComponent