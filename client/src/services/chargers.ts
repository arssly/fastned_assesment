import { ChargerStatus, ChargerTypes } from "@src/models";
import AxiosInstance from "./Axios";

type DeleteChargerProps = {
  cid: string | number;
  lid: string | number;
};
export const deleteCharger = ({ cid, lid }: DeleteChargerProps) =>
  AxiosInstance.delete(`/locations/${lid}/chargers/${cid}`).then(
    (res) => res.data
  );

type AddChargerProps = {
  lid: string | number;
  type: ChargerTypes;
  status: ChargerStatus;
  serialNumber: number;
};
export const addCharger = ({
  lid,
  type,
  serialNumber,
  status,
}: AddChargerProps) =>
  AxiosInstance.post(`/locations/${lid}/chargers`, {
    type,
    serialNumber,
    status,
  }).then((res) => res.data);

type EditChargerProps = AddChargerProps & { cid: string | number };
export const editCharger = ({ lid, cid, ...rest }: EditChargerProps) =>
  AxiosInstance.put(`/locations/${lid}/chargers/${cid}`, rest).then(
    (res) => res.data
  );
