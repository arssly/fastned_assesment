import { useQuery } from "react-query";
import { getLocations } from "@services";
import { LocationList } from "@models";

export const useGetLocations = () =>
  useQuery<LocationList[]>("locationList", getLocations);
