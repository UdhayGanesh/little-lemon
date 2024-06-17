import React, { useState } from "react";

const BookingForm = (props) => {
  const [date,setDate]=useState("");
  const [times,setTimes]=useState("");
  const [guests,setGuests]=useState("");
  const [occasion,setOccasion]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange=(e)=>{
    setDate(e);
    props.dispatch(e);
  }
  return (
    <section>
      <form>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose dates</label>
            <input id='book-date' value={date} type='date' onChange={(e)=>handleChange(e.target.value)} required/>
          </div>

          <div>
            <label htmlFor="book-time">Choose time</label>
            <select id="book-time" value={times} onChange={(e)=>setTimes(e.target.value)}>
              <option value=''>Select a time slot</option>
              {
                props.availableTimes.availableTimes.map(availableTimes=>{
                  return <option key={availableTimes}>{availableTimes}</option>
                })
              }
            </select>
          </div>

          <div>
            <lable htmlFor='book-guests'>Number of Guests </lable>
            <input id='book-guests' min='1' value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          </div>

          <div>
            <lable htmlFor='book-occasion'>Occassion </lable>
            <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversery</option>
            </select>
          </div>

          <div className="btnReceive">
            <input aria-label="On Click" type='submit'value={'make your reservation'}/>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;