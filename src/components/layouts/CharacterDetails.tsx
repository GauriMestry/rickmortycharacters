import "../styles/detailsStyles.css";

import { DetailsFieldShimmer, ImageShimmer } from "../common/Shimmer";

import { ReactElement } from "react";
import { getCharacterDetailsById } from "../../apis/services";
import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

type Field = {
  key: string;
  value: string;
  url?: string;
};

export function CharacterDetails(): ReactElement {
  const { characterId } = useParams({ from: "/$characterId" });

  const { data: characterDetails, isLoading } = useQuery({
    queryKey: ["characters", characterId],
    queryFn: () => getCharacterDetailsById(parseInt(characterId)),
    placeholderData: (prevData) => prevData,
  });

  const {
    name,
    image,
    status,
    species,
    location,
    type,
    gender,
    created,
    origin,
  } = characterDetails ?? {};

  const detailsFields: Field[] = [
    { key: "Status", value: status ?? "" },
    { key: "Species", value: species ?? "" },
    { key: "Gender", value: gender ?? "" },
    { key: "Type", value: type ?? "" },
    { key: "Origin", value: origin?.name ?? "" },
    { key: "Location", value: location?.name ?? "" },
    { key: "Created", value: created ?? "" },
  ];

  return (
    <div className="details-wrapper">
      <div className="card-container">
        <h2 className="title">{name}</h2>
        <div className="avtar-container">
          <div className="avtar">
            {!isLoading ? (
              <img src={image} alt={image} className="image" />
            ) : (
              <ImageShimmer />
            )}
          </div>
          <div className="details">
            {detailsFields?.map((field) => {
              if (!isLoading) {
                if (field?.key === "Created") {
                  return (
                    <p>
                      <strong>Created:</strong>{" "}
                      {new Date(String(field?.value))?.toDateString()}
                    </p>
                  );
                } else {
                  return (
                    <p>
                      <strong>{field?.key}:</strong>
                      {field?.value ?? ""}
                    </p>
                  );
                }
              } else {
                return <DetailsFieldShimmer />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
