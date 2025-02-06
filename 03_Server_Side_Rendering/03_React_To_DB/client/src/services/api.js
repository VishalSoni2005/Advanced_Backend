import axios from "axios";

const API_URL = "http://localhost:4000"; // Change this in production

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    throw error.response.data;
  }
};


