import axios from "./axios";

export const uploadsRequest = (data) => axios.post("/uploads", data);
export const getUploadsRequest = () => axios.get("/uploads");