import axiosInstance from "./axios-interceptor";
import { AxiosRequestConfig } from "axios";

export const axiosRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance(config);
    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    throw error; // Propaga el error para manejarlo en el lugar de la llamada
  }
};
