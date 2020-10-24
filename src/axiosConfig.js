import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.baseURL = "https://devdeskqueue3-pt.herokuapp.com/";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
