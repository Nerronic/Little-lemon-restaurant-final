import React, { useState } from "react";
/* booking form  below*/
const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handelSubmit}>
          <fieldset>
            <div>
              {/* choose Date */}
              <label htmlFor="book-date"> Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            {/*select times*/}
            <div>
              <label htmlFor="book-time"> Choose Time:</label>
              <select
                id="book-time"
                vale={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value=""> Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            {/* # of guests*/}
            <div>
              <label htmlFor="book-guests"> Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>
            {/**Occanssion field */}
            <div>
              <label htmlFor="book-occasion"> Occasion:</label>
              <select
                id="book-occassion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniverssary</option>
              </select>
            </div>
            {/**submit Button */}
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Make your Reservation"}
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
