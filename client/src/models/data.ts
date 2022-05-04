export enum ChargerTypes {
  HPC = "HPX",
  T52 = "T52",
  T53C = "T53C",
}

export enum ChargerStatus {
  CONNECTED = "CONNECTED",
  NOT_CONNECTED = "NOT_CONNECTED",
  REMOVED = "REMOVED",
}

export type Charger = {
  id: number;
  type: ChargerTypes;
  serialNumber: string;
  status: ChargerStatus;
  lastUpdated: string;
};

type LocationCommon = {
  id: number;
  name: string;
  location: number;
  postalCode: string;
  lastUpdated: string;
  country: string;
};

export type Location = LocationCommon & { chargers: Charger[] };
export type LocationList = LocationCommon & { chargerCount: number };
