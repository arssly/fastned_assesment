import { FC } from "react";
import { Button, ButtonTheme, DataTable } from "@components";
import { Intro } from "./intro";

import "./locationList.scss";

export const LocationList: FC = () => {
  const data = [
    {
      id: 1,
      name: "ams",
      location: 1123,
      chargers: 3,
      lastUpdated: "yesterday",
      country: "NLD",
    },
    {
      id: 2,
      name: "doe",
      location: 323,
      chargers: 5,
      lastUpdated: "last year",
      country: "NLD",
    },
    {
      id: 3,
      name: "THE ONE",
      location: 11111,
      chargers: 11,
      lastUpdated: "never",
      country: "NLD",
    },
  ];

  const convertedData = data.map((d) => {
    return [
      d.name,
      d.location,
      d.chargers,
      d.country,
      d.lastUpdated,
      <Button theme={ButtonTheme.OUTLINE} title="Edit" key={`edit-${d.id}`} />,
    ];
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
        data={convertedData}
      />
    </div>
  );
};
