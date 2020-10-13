import axios from "axios";

const request = axios.create({
  baseUrl: "http://localhost:8000",
});

export default request;



