import axiosInstance from "./config.api";

const get = async (endpoint: string) => {
 
  
  try {
    const reponse = await axiosInstance.get(endpoint);
    console.log("data received", reponse);

    return reponse.data;
  } catch (error) {
    throw error;
  }
};
const post = async (endpoint: string, data: any) => {
  try {
    const reponse = await axiosInstance.post(endpoint, data);

    return reponse.data;
  } catch (error) {
    throw error;
  }
};

export const api = {
  get,
  post,
};
