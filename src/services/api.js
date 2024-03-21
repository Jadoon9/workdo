import axios from "axios";

const commonConfig = {
  baseURL: "http://127.0.0.1:8000/api",
};

const authApi = axios.create({
  ...commonConfig,
});

const noAuthApi = axios.create({
  ...commonConfig,
});

// // Request interceptor for the authenticated API instance
authApi.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Token${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { authApi, noAuthApi };
