import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Submitting form adds box", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes yet
  expect(queryByTestId('box-container')).toBeEmpty();

  const height = getByLabelText("Height:");
  const width = getByLabelText("Width:");
  const color = getByLabelText("Color:");
  const submitBtn = queryByText("Submit")

  // fill out the form
  fireEvent.change(height, { target: { value: 100 } });
  fireEvent.change(width, { target: { value: 100 } });
  fireEvent.change(color, { target: { value: 'red' } });
  fireEvent.click(submitBtn);

  // box exists!
  expect(queryByTestId('box')).toBeInTheDocument();
});

it("Clicking box deletes", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes yet
  expect(queryByTestId('box-container')).toBeEmpty();

  const height = getByLabelText("Height:");
  const width = getByLabelText("Width:");
  const color = getByLabelText("Color:");
  const submitBtn = queryByText("Submit")

  // fill out the form
  fireEvent.change(height, { target: { value: 100 } });
  fireEvent.change(width, { target: { value: 100 } });
  fireEvent.change(color, { target: { value: 'red' } });
  fireEvent.click(submitBtn);
  
  const box = queryByTestId('box');

  // box exists!
  expect(box).toBeInTheDocument();

  fireEvent.click(box);
  
  // box doesn't exist!
  expect(box).not.toBeInTheDocument();
});