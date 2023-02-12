import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
// import PropertyService from "../services/property.service";
import "../styles/listing.css"

const ListCommunity = (props) => {
    // let {original, properties, search, currentUser, setCurrentUser} = props;
    // const navigate = useNavigate();

    // const rows = [];
    // const index = properties.findIndex(obj => {
    //     return obj._id === isClick.id;
    //   });

    //     return (
    //         <div className="row" id="listing">
    //             <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    //                 {
    //                     rows.map(property => {
    //                         return <CardComponent key={property._id} properties={property} isClick={isClick} setClick={setClick}/>
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
}

const ListCommunityComponent = (props) => {
    // // console.log(search);
    // let { search, setSearch, currentUser, setCurrentUser } = props;
    // const [filtered, setFiltered] = useState([]);
    // const [activeCategory, setActiveCategory] = useState('');
    // const [data,setData]=useState([]);

    // //get data from DB
    // const getData = () => {
    //     // PropertyService.getAll()
    //     // .then((data) => {
    //     //   console.log(data);
    //     //   setData(data.data);
    //     //   setFiltered(data.data);
    //     // })
    //     // .catch((err) => {
    //     //   console.log(err);
    //     // });
        
    // }
    // useEffect(()=>{
    //     getData()
    // },[])

  return (
    <div>
      <p>dddd</p>
        {/* <div className="container" id="housing"> */}
            {/* <ListCommunity original={data} properties={filtered} search={search} currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
        {/* </div> */}
    </div>
  )
}

export default ListCommunityComponent