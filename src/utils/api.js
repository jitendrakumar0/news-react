import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN;

const BASE_URL2 = process.env.REACT_APP_BASE_URL2;
const TOKEN2 = process.env.REACT_APP_API_TOKEN2;

export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(`${BASE_URL}${url}apiKey=${TOKEN}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchDataFromApi2 = async (url) => {
    try {
        const data2  = await axios.get(`${BASE_URL2}${url}apiKey=${TOKEN2}`);
        return data2;
    } catch (error) {
        console.log(error);
    }
};
