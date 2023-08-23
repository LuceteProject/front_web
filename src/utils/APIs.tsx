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
    //user_id 저장소에서 가져오기
    const userInfo = localStorage.getItem('user-info');
    const userInfoJson = userInfo ? JSON.parse(userInfo) : null;
    if (userInfoJson) {
      const user_id = userInfoJson.user_id;
      const postData = {
        ...data,
        user_id, //userId;
      }
      const response = await axios.post(`${apiUrl}${endpoint}`, postData);
      return response.data;
    }
    else {
      window.alert('올바르지 않은 접근입니다.'); //userId가 없다는 뜻
      return;
    }
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

/** function : isTokenValid localStorage에 저장된 토큰이 유효한지 검증
 * endpoint는 API 양식에 맞춰서 변경 필요
 * @params {string} token localStorage에 저장되어 있는 토큰
 * @return {boolean} data.valid 토큰이 유효한지 검증(t/f)
*/
export const isTokenValid = async (token: string) => {
  const endpoint = `api/check-token`;
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    // valid하다면 true 반환, 아닌 경우 false 반환
    // valid하면 -> 유저정보를 토큰에 저장(data.user 확인 필요)
    if (data.valid) {
      localStorage.setItem("URLtoken", token);
      localStorage.setItem("user-info", data.user);
    }
    else {
      //token이 유효하지 않다면 모든 정보 삭제
      //localStorage.removeItem("URLtoken");
      //localStorage.removeItem("user-info");
    }
    return data.valid;
  } catch (error) {
    console.error("Error checking token validity:", error);
    return false;
  }
}
