import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  timeout: 10000,
});

export default axios;
