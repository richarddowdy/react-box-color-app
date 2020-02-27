import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function () {
  render(<Box height={100} width={100} color={'blue'}/>);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box height={100} width={100} color={'blue'}/>);
  expect(asFragment()).toMatchSnapshot();
});