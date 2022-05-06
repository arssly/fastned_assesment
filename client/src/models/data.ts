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
  serialNumber: number;
  status: ChargerStatus;
  lastUpdated: string;
};

type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type LocalCharger = SomePartial<Charger, "id" | "lastUpdated"> & {
  localId?: string;
};

type LocationCommon = {
  id: number;
  name: string;
  location: number;
  postalCode: string;
  lastUpdated: string;
  country: string;
  city: string;
};

export type Location = LocationCommon & { chargers: Charger[] };
export type LocationList = LocationCommon & { chargerCount: number };
