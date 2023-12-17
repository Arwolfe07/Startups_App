// This file connects the frontend to backend via apis.
import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchData = () => API.get('/startup/data');
export const addData = (data) => API.post('/startup/data',{data});