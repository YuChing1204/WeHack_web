import axios from "axios";
const API_URL = "http://localhost:8080/api/community";

class CommunityService {
  
  getAll() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/list", {
      headers: {
        Authorization: token,
      },
    });
  }
  // create new community
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

  getEvents() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/", {
      headers: {
        Authorization: token,
      },
    });
  }

  // join community
  joinCommunity(_id, user_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL + "/join/" + _id,
      { user_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // join event
  joinEvent(_id, user_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL + "/event" + "/register/" + _id,
      { user_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // get user event
  getUserEvent(user_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(
      API_URL + "/event",
      { user_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

}

export default new CommunityService();
