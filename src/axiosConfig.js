import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.baseURL = "https://dev-desk-node.herokuapp.com/";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
