import axios from "axios";
import ApiRoutes from "../Routes/apiRoutes";

const axiosInstance = axios.create({
  baseURL: ApiRoutes.BASE_URL,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(function (config) {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return {
      data: response?.data,
      message: response?.statusText,
      status: response?.status,
    };
  },
  async (error) => {
    const { response } = error;
    // console.log(response);

    // if (response?.status === 401) {
    //   const { data } = await axiosInstance.get(ApiRoutes.TOKEN);
    //   error.config.headers.authorization = data?.token;
    //   return axiosInstance.request(error.config);
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
