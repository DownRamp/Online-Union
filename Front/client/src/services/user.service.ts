import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/union/";

class UnionService {
  
  getJobs() {
    return axios.get(API_URL);
  }

  getJobInArea(index:Number) {
    return axios.get(API_URL + index, {headers: authHeader()} );
  }

  getAreasForJob(index:Number) {
    return axios.get(API_URL + 'area/' +index, {headers: authHeader()} );
  }

  getVotes(index:Number,area:Number) {
    return axios.get(API_URL + 'votes/' +index+ "/" +area, {headers: authHeader()} );
  }

  getComplaints(index:Number) {
    return axios.get(API_URL + 'complaint/' +index, {headers: authHeader()} );
  }

  getStrike() {
    return axios.get(API_URL + 'strikes', {headers: authHeader()} );
  }

  postJob(jobs:any) {
    return axios.post(API_URL + 'job', jobs, {headers: authHeader()} );
  }

  postArea(area:any) {
    return axios.post(API_URL + 'area', area, {headers: authHeader()} );
  }

  postDemand(demand:any) {
    return axios.post(API_URL + 'demand', demand, {headers: authHeader()} );
  }

  postVote(vote:any) {
    return axios.post(API_URL + 'demand/vote', vote, {headers: authHeader()} );
  }

  postComplaint(complaint:any) {
    return axios.post(API_URL + 'complaint', complaint, {headers: authHeader()} );
  }

  postStrike(strike:any) {
    return axios.post(API_URL + 'strike', strike, {headers: authHeader()} );
  }

  postJoinStrike(strike:any) {
    return axios.post(API_URL + 'strike/join', strike, {headers: authHeader()} );
  }

}
export default new UnionService();