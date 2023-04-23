import axios from "axios";

const hostname = window.location.hostname
let url = ""
if(hostname === "localhost") url = "https://api.credenz.in/nth/api"
else url = `https://api.credenz.in/nth/api`
const backend = axios.create({
    baseURL: url
  });

const login = (data) => backend.post( `/auth/token/login/`, data,{headers: { "content-type": "application/json" }} );
const register = (data) => backend.post( `/auth/users/`, data,{headers: { "content-type": "application/json" }} );
const userquestion = (data) => backend.get( `/userquestion/${data}`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const user = () => backend.get( `/auth/users/me/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
const extrahint= () => backend.post( `/question/extra-hint/`,null, {headers: { "content-type": "application/json", Authorization:`Token ${localStorage.getItem("auth-token")}` }} );
const leaderboard = () => backend.get( `/leaderboard/`, {headers: { "content-type": "application/json"}} );
const time=() => backend.get( `/timer/`, {headers: { "content-type": "application/json"}} );
const feedback = (data) => backend.post( `/auth/feedback/`, data,{headers: { "content-type": "application/json" }} );
const Requests = {
    login,
    register,
    userquestion,
    user,
    extrahint,
    leaderboard,
    time,
    feedback
  };
  export default Requests;