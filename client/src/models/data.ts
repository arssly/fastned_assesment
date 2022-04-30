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

export type Location = {
  id: number;
  name: string;
  location: number;
  chargers: Charger[];
  postalCode: string;
  lastUpdated: string;
  country: string;
};
