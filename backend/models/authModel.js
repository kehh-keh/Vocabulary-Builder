const axios = require("axios");

const API_URL = "http://localhost:3001/users";

exports.getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

exports.addUser = async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};