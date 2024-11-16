import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Currency Exchange Rates header", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headerElement = screen.getByText(/Currency Exchange Rates/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders search bar", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const searchInput = screen.getByPlaceholderText(/Search by country or code.../i);
  expect(searchInput).toBeInTheDocument();
});
