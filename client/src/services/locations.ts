import AxiosInstance from "./Axios";
import { ChargerStatus, ChargerTypes } from "@src/models";

export const getLocations = () =>
  AxiosInstance.get("/locations").then((res) => res.data);

type L = {
  name: string;
  location: number;
  postalCode: string;
  country: string;
  city: string;
  chargers: {
    type: ChargerTypes;
    status: ChargerStatus;
    serialNumber: number;
  }[];
};
export const addLocation = (l: L) =>
  AxiosInstance.post("/locations", l).then((res) => res.data);
