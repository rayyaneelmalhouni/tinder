import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend46.herokuapp.com",
});

export default instance;
