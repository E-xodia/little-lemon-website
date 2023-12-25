import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/BookingForm";

describe("BookingForm", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = {
    availableTimes: ["10:00 AM", "11:00 AM", "12:00 PM"],
  };

  beforeEach(() => {
    render(
      <BookingForm
        submitForm={mockSubmitForm}
        dispatch={mockDispatch}
        availableTimes={mockAvailableTimes}
      />
    );
  });

  it("renders the form with all inputs", () => {
    expect(screen.getByLabelText("Choose Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests:")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Ocassion")).toBeInTheDocument();
    expect(screen.getByLabelText("On Click")).toBeInTheDocument();
  });

  it("allows entering and submitting form data", () => {
    fireEvent.change(screen.getByLabelText("Choose Date"), {
      target: { value: "2023-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Choose Time"), {
      target: { value: "11:00 AM" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests:"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Select Ocassion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByLabelText("On Click"));

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
