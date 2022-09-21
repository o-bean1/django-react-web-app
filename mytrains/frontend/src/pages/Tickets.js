import { useLocation } from "react-router-dom";
import React, { useState , useEffect } from "react";
import LineChart from '../components/LineChart.js'
import { Link } from 'react-router-dom';



function TicketPage() {
  const location = useLocation();
  let [tickets, setTickets] = useState([])
  let [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        backgroundColor: [
          "rgba(192,192,192,1)"
        ],
        borderColor: "black",
        borderWidth: 2,
        tension: 0.2
      },
    ],
  })

  

  useEffect(() => {
      getTickets()
  }, [])

  let getTickets = async () => {

      let response = await fetch('/api/tickets/')
      let data = await response.json()
      setTickets(data)
      let priceLabels = data[0].price
      let dateLabels = data[0].date
      priceLabels = priceLabels.slice(2)
      priceLabels = priceLabels.slice(0, priceLabels.length-2)
      priceLabels = priceLabels.replace(/'/g, '');
      priceLabels = priceLabels.split(', ')
      console.log('hi',priceLabels)
      setUserData(  {
        labels: dateLabels.split(', '),
        datasets: [
          {
            label: "Price",
            data: priceLabels,
            backgroundColor: [
              "rgba(16 ,47,92,1)"
            ],
            borderColor: "black",
            borderWidth: 2,
            tension: 0.2
          },
        ],
      } )

      
      let deleteNote = async () => {
        fetch(`/api/tickets/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        
    }


    deleteNote()
  }

  // console.log('ticktestesting',tickets[0])

  // let ticketToChart = tickets[0]

  // console.log('ticktestesting2',ticketToChart)
  // console.log(ticketToChart.price)

 


  return (
    <div>
      {/* <div>TicketPage</div> */}

      {/* <div>selected date:{location.state.date}</div> */}
      {/* <div> dates to investigate :{location.state.dates}</div> */}
      {/* <li>
            <Link to='/'>Home</Link>
          </li> */}
        < div className="jumbotron2 jumbotron-fluid position-relative" >
          <div className="olis-container">
      
        <LineChart chartData={userData} />
      <div className="olis-container-2">
        The best time to buy a ticket is __ weeks in advance!
      </div>
      </div>
</div>
      {/* <div>
        {tickets.map((ticket, index) => (
          <h3 key={index}>{ticket.price}</h3>
        ))}
      </div>

      <div>
        {tickets.map((ticket, index) => (
          <h3 key={index}>{ticket.date}</h3>
        ))}
      </div> */}
    </div>
  );
}

export default TicketPage;


