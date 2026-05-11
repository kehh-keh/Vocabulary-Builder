const axios = require("axios");

const API_URL = "http://localhost:3001/words";

exports.getWords = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

exports.addWord = async (word) => {
    const response = await axios.post(API_URL, word);
    return response.data;
};

exports.deleteWord = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};