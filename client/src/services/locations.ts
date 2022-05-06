import AxiosInstance from "./Axios";
import { ChargerStatus, ChargerTypes } from "@src/models";

export const getLocations = () =>
  AxiosInstance.get("/locations").then((res) => res.data);

export const getLocation = (id: string) =>
  AxiosInstance.get(`/locations/${id}`).then((res) => res.data);

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

type EditLocationProps = {
  name: string;
  location: number;
  postalCode: string;
  country: string;
  city: string;
  id: string | number;
};
export const editLocation = (props: EditLocationProps) => {
  const { id, ...rest } = props;
  return AxiosInstance.put(`/locations/${id}`, rest).then((res) => res.data);
};
