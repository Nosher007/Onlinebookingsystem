import React, {useState} from 'react' 
import data from './data.js';

function PurchaseTickets() { 
 
 const intialValue = { departure: "lahore", destination: "", day: "" }
 const [scheduleValue, setScheduleValue] = useState(intialValue);
 

 const [avaliableBuses, setAvaliableBuses] = useState([]);

 const onChangeScheduleValue = (e) => {
     const {name, value} = e.target;
     const info = {...scheduleValue, [name]: value};
     setScheduleValue(info);
    //  console.log("Wefew", info.destination);
 }


  const showBookingList = (avaliableBus) => {
            console.log("ewdw", avaliableBus.destination);
            
    //   if(avaliableBus.destination === "karachi"){
        
        setAvaliableBuses(data.filter( element  => element.destination === avaliableBus.destination));
        
    //   }
  }  


  return (
    <>
        {/* <!-- contact us form  --> */}
        <section>
            <div className="contact-form-main mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="lc-form contact-us-form mt-0"> 
                                <form> 
                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <label>Departure</label>
                                            <select className='form-control' name="departure" onChange={onChangeScheduleValue} value={scheduleValue.departure}>
                                                {/* <option>Departure</option>  */}
                                                <option value="lahore">Lahore</option>
                                                {/* <option value="karachi">Karchi</option>
                                                <option value="islamabad">Islamabad</option>
                                                <option value="multan">Multan</option> */}
                                            </select> 
                                        </div>
                                    </div> 

                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <label>Destination</label>
                                            <select className='form-control' name="destination" onChange={onChangeScheduleValue} value={scheduleValue.destination}> 
                                                <option>Select Destination</option> 
                                                {/* <option value="lahore">Lahore</option> */}
                                                <option value="karachi">Karachi</option>
                                                <option value="Islamabad">Islamabad</option>
                                                <option value="Multan">Multan</option>
                                            </select> 
                                        </div>
                                    </div> 

                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <label>Departure Date</label>
                                            <select className='form-control' name="day" onChange={onChangeScheduleValue} value={scheduleValue.day}> 
                                                <option>Select Day</option> 
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option> 
                                            </select> 
                                            {/* <input type="date" className="form-control" />  */}
                                        </div>
                                    </div>  
 

                                    <div className="form-btn text-center mb-5">
                                        <button type="button" className="genral-btn" onClick={ () =>  showBookingList(scheduleValue) } >Get Schedule</button> 
                                    </div>

                                    {/* booking list table */}
                                    <table className="table table-bordered mt-5">
                                        <thead>
                                            <tr>
                                                <th>Departure</th>
                                                <th>Destination</th>
                                                <th>Departure Day</th>
                                                <th>Time</th>
                                                <th>Ticket price</th>
                                                <th>Book Ticket</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                avaliableBuses.map( (list, index )=> {
                                                    return(
                                                        <tr key={index}>
                                                            <td>{list.departure}</td>
                                                            <td>{list.destination}</td>
                                                            <td>{list.departureDay}</td>
                                                            <td>{list.time}</td> 
                                                            <td>{list.price}</td>
                                                            <td><button type="button" class="genral-btn">Booking</button></td>
                                                        </tr> 
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- contact us form  --> */}
    </>
  )
}

export default PurchaseTickets