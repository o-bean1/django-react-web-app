// imports
import React, { useState , useEffect} from "react";
import DatePicker from "react-datepicker";
import { useNavigate} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import scrapeData from './utils/utils.js';
import LoadingSpinner from "./LoadingSpinner";


// main implementation. using selected and onChange as main props to get and change the selected date value
function DateSelector() {
  const navigate = useNavigate(); 
  const [startDate, setStartDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  let dataToPass = {date: [], URLs: []}

  let createTicket = async () => {
    await fetch(`/api/tickets/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToPass)
    })
    setIsLoading(false)
    console.log('here, Data has been posted ')
    navigate("/ticketpage", 
  )
  } 

  function submitDateHandler(){
    setIsLoading(true);

    console.log(startDate,'herre')
    const dates = scrapeData(startDate)[0]
    const URLs = scrapeData(startDate)[1]
    console.log(startDate,'herrre')
    dataToPass['date'] = dates
    dataToPass['URLs'] = URLs
    

    createTicket()
    
  }

  
  const renderUser = (
    <div></div>
  )

  return (
    <div>
    <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />

    <button onClick={submitDateHandler}>
        Submit
    </button>

<div >
      {isLoading ? <LoadingSpinner /> : renderUser}
    </div>
    

    </div>
  );
};

export default DateSelector;