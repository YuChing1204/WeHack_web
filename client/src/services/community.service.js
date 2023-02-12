import axios from "axios";
const API_URL = "http://localhost:8080/api/community";

class CommunityService {
  // rcreate new community
  createCommunity(
    location,
    description) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL,
      { location,
        description },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CommunityService();