import axios from "axios";
//axios.defaults.withCredentials = true;

const apiUrl = process.env.REACT_APP_API_IP;
/** function : 서버로부터 데이터 get
 * @params {string} endpoint - API 경로
 * @return {any} response.data 결과 응답값 타입에 맞게 매핑 필요
*/
export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/** function : postData 서버에 데이터 전송
 * API 양식에 맞춰서 필요한 데이터 다 넣었는지 확인 필요
 * @params {string} endpoint - API 경로
 * @params {any} data - 전송할 데이터 (json)
 * @return {any} response.data 결과 응답값

*/
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${apiUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
