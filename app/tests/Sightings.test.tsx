import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import SightingsCard from "../components/SightingsCard";

const sightingData = {
  name: "Leopard 1",
  location: "Location 1",
  time: "10:00 AM",
  description: "Description 1",
  id: "1",
  imageUrl: "https://example.com/image1.jpg",
};

describe("SightingsCard", () => {
  it("should render sighting card correctly", () => {

    render(
      <SightingsCard
        name={sightingData.name}
        location={sightingData.location}
        time={sightingData.time}
        description={sightingData.description}
        id={sightingData.id}
        imageUrl={sightingData.imageUrl}
        onDelete={vi.fn()}
      />,
    );

    screen.debug();
  });
});
