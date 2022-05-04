import AxiosInstance from "./Axios";

export const getLocations = () =>
  AxiosInstance.get("/locations").then((res) => res.data);
