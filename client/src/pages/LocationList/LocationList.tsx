import { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, ButtonTheme, DataTable } from "@components";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useGetLocations } from "@services";
import { Intro } from "./intro";

import "./locationList.scss";

export const LocationList: FC = () => {
  const location = useLocation();
  const { data: locations, isLoading } = useGetLocations();

  const locationRows = locations?.map((l) => {
    return [
      l.name,
      l.location,
      l.chargerCount,
      l.country,
      formatDistanceToNow(new Date(l.lastUpdated)),
      <Link
        key={`edit-${l.id}`}
        to={`/locations/${l.id}`}
        state={{ backgroundLocation: location }}
      >
        <Button
          theme={ButtonTheme.OUTLINE}
          title="Edit"
          className="edit-button"
        />
      </Link>,
    ] as ReactNode[];
  });

  return (
    <div className="location-list">
      <Intro />
      <DataTable
        headers={[
          "Location",
          "Location No",
          "Chargers",
          "Country",
          "Last Updated",
          "Actions",
        ]}
        data={locationRows}
        emptyMessage={
          isLoading
            ? "please wait while data is loading"
            : "No locations has been added yet"
        }
      />
    </div>
  );
};
