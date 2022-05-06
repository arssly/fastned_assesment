import { useMutation, useQuery } from "react-query";
import {
  getLocations,
  addLocation,
  getLocation,
  editLocation,
} from "@services";
import { LocationList, Location } from "@models";
import { queryClient } from "@src/index";

export const useGetLocations = () =>
  useQuery<LocationList[]>(getLocations.name, getLocations);

export const useGetLocation = (id: string) =>
  useQuery<Location>([getLocation.name, id], () => getLocation(id));

export const useAddLocation = () =>
  useMutation(addLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });

export const useEditLocation = () =>
  useMutation(editLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });
