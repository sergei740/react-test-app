import axios from "axios";

export default axios.create({
  baseURL: "https://quiet-dawn-70829.herokuapp.com/",
  responseType: "json"
});