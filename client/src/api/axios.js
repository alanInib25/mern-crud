import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true
})
/*withCredentials: true ;; necesario para leer las cookies enviadas desde el backend */
export default axiosInstance;