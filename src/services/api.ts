import axios, { AxiosError, AxiosInstance } from "axios";
import { getLocalStorage, setLocalStorage } from "src/helpers/localstorage";

const ApiUrl: AxiosInstance = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiUrl;

const refreshAccessToken = async () => {
  const refreshToken = getLocalStorage("refreshToken");

  const response = await ApiUrl.post<{ accessToken: string }>(
    "/refresh-token",
    {
      refreshToken,
    }
  );

  const accessToken = response.data.accessToken;

  setLocalStorage("accessToken", accessToken);

  return accessToken;
};

ApiUrl.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as {
      _retry?: boolean;
      headers: { Authorization: string };
    };
    // Check if error response is Unauthorized (status code 401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh access token
        const accessToken = await refreshAccessToken();

        // Update Authorization header with new access token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        // Resend failed request
        return ApiUrl(originalRequest);
      } catch (refreshError) {
        // Handle error when refresh token fails
        return Promise.reject(refreshError);
      }
    }

    // Handle other error responses
    return Promise.reject(error);
  }
);
