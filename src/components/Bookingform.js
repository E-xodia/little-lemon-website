import React from "react";
import { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [ocassion, setOcassion] = useState(""); // Initializing state to store the selected date,time,guest and occasion
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e); // Updating state when the date is changed
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm();
    // Here, you can handle the form submission, like sending data to a server
    // For now, let's just log the selected date
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guesst">Number of Guests:</label>
              <input
                id="book-guess"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type={"number"}
                placeholder={0}
                max={10}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Select Ocassion</label>
              <select
                id="book-ocassion"
                key={ocassion}
                value={ocassion}
                onChange={(e) => setOcassion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Engagment</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Make Your Reservation"}
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}
export default BookingForm;
