import { useMutation } from "react-query";
import { queryClient } from "@src/index";
import {
  deleteCharger,
  getLocations,
  addCharger,
  editCharger,
} from "@services";

export const useDeleteCharger = () =>
  useMutation(deleteCharger, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });

export const useAddCharger = () =>
  useMutation(addCharger, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });

export const useEditCharger = () =>
  useMutation(editCharger, {
    onSuccess: () => {
      queryClient.invalidateQueries(getLocations.name);
    },
  });
