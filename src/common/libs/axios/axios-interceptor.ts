import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react"; // Usamos el hook de next-auth para obtener la sesión
import { getValidationError } from "./utils/get-validation-error";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
  withCredentials: true,
});

const updateHeaders = async (request: AxiosRequestConfig) => {
  // Obtén la sesión con el token de acceso
  const session = await getSession();
  const accessToken = session?.accessToken;

  // Si el accessToken está disponible, se agrega al header de la solicitud
  if (accessToken && request.headers) {
    request.headers.Authorization = `Bearer ${accessToken}`;
    request.headers["Content-Type"] = "application/json"; // Si lo necesitas
  }

  return request;
};

axiosInstance.interceptors.request.use((request: any) => {
  // Si la solicitud es a /auth, no se le agrega el token (puede ser útil para login o logout)
  if (request.url?.includes("/auth")) return request;

  return updateHeaders(request);
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Si el token ha expirado (código 401), intenta refrescarlo
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const session = await getSession();
      if (session?.accessToken) {
        // Aquí podrías hacer una solicitud para obtener un nuevo token
        // Por ejemplo, enviar una solicitud al backend para renovar el token
        // y actualizar el acceso con el nuevo accessToken.

        // Después de obtener el nuevo token, puedes reintentar la solicitud original.
        return axiosInstance(originalRequest);
      }
    }

    const errorMessage = getValidationError(error.code);
    console.error("ERROR: ", errorMessage);

    return Promise.reject(error);
  }
);

export default axiosInstance;
