import axios from "axios";
//axios.defaults.withCredentials = true;

const apiUrl = process.env.REACT_APP_API_IP;

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${apiUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
