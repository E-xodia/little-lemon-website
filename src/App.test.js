import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

test("renders header text", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerElement = screen.getByText(/Little Lemon/i);
  expect(headerElement).toBeInTheDocument();
});
