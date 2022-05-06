import { useMutation, useQuery } from "react-query";
import { getLocations, addLocation } from "@services";
import { LocationList } from "@models";
import { queryClient } from "@src/index";

export const useGetLocations = () =>
  useQuery<LocationList[]>(getLocations.name, getLocations);

export const useAddLocation = () =>
  useMutation(addLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });
