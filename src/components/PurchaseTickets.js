import React, {useEffect, useState} from 'react' 
import data from './data.js';

function PurchaseTickets() { 
 
//  getting form values 
 const intialValue = { departure: "lahore", destination: "", day: "", name: "", phone: "" };
 const [scheduleValue, setScheduleValue] = useState(intialValue);
 
//  avaliable busses 
 const [avaliableBuses, setAvaliableBuses] = useState([]);

//  form errors 
    const [formError, setFormError] = useState({});

    const onChangeScheduleValue = (e) => {
        const {name, value} = e.target;
        const info = {...scheduleValue, [name]: value};
        setScheduleValue(info);
        //  console.log("Wefew", info.destination);
    } 

    const showBookingList = (avaliableBus) => {
        
        setFormError(validateForm(avaliableBus));

        
            
            // console.log("ewdw", Object.keys(formError).length);
    }  

    useEffect( () => {
        if(Object.keys(formError).length === 0 ){
            // console.log("ewdw11", Object.keys(formError).length);

            if(scheduleValue.day === "Monday"){ 
            setAvaliableBuses(data.filter( element  => (element.destination === scheduleValue.destination) && (element.departureDay === scheduleValue.day) ));
            }
            else if(scheduleValue.day === "Tuesday"){ 
                setAvaliableBuses(data.filter( element  => (element.destination === scheduleValue.destination) && (element.departureDay === scheduleValue.day) ));
            }
            else if(scheduleValue.day === "Wednesday"){ 
                setAvaliableBuses(data.filter( element  => (element.destination === scheduleValue.destination) && (element.departureDay === scheduleValue.day) ));
            }
            else{
                setAvaliableBuses(data.filter( element  => (element.destination === scheduleValue.destination) ));
            }

            // console.log("ewdw11", avaliableBuses);

        }
    }, [formError]);

    useEffect( () => {
        setAvaliableBuses(avaliableBuses);
        console.log("ewdw", avaliableBuses[0]);

    }, [avaliableBuses])


    // form validation 
    const validateForm = (value) => {
        let errors = {}; 
        let phoneno = /^\d{10}$/;


        if(!value.destination || value.destination === ""){
            errors.destination = "Please select destination";
        } 
        if(!value.name){
            errors.name = "Please fill the name field";
        }
        if(!value.phone){
            errors.phone = "Please fill the mobile number field";
        } 
        else if( ( !(value.phone).match(phoneno) )   ){ 
            errors.phone = "Please enter 10 digits of your Mobile number";
        } 

        return errors


    }


    return (
        <>
            {/* <!-- contact us form  --> */}
            <section>
                <div className="contact-form-main mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12"> 
                            <div className="lc-hd text-left">
                                    <h2>Book Ticket</h2> 
                                </div>
                                <div className="lc-form contact-us-form mt-0"> 
                                    {/* <form>  */}
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
                                                <label>Destination <sup>*</sup></label>
                                                <select className='form-control' name="destination" onChange={onChangeScheduleValue} value={scheduleValue.destination}> 
                                                    <option value="">Select Destination</option> 
                                                    {/* <option value="lahore">Lahore</option> */}
                                                    <option value="karachi">Karachi</option>
                                                    <option value="Islamabad">Islamabad</option>
                                                    <option value="Multan">Multan</option>
                                                </select> 
                                                {<div className={formError.destination ? "error" : "d-none"}>{formError.destination}</div>}
                                            </div>
                                        </div> 

                                        <div className="form-field">
                                            <div className="form-group"> 
                                                <label>Departure Day</label>
                                                <select className='form-control' name="day" onChange={onChangeScheduleValue} value={scheduleValue.day}> 
                                                    <option>Select Day</option> 
                                                    <option>Monday</option>
                                                    <option>Tuesday</option>
                                                    <option>Wednesday</option> 
                                                </select> 
                                                {/* {<div className={formError.day ? "error" : "d-none"}>{formError.day}</div>} */}

                                                {/* <input type="date" className="form-control" />  */}
                                            </div>
                                        </div>  

                                        <div className="form-field">
                                            <div className="form-group"> 
                                                <label>Your Name <sup>*</sup></label> 
                                                <input type="text" className="form-control" placeholder="Full Name" name="name" onChange={onChangeScheduleValue} value={scheduleValue.name} /> 
                                                {<div className={formError.name ? "error" : "d-none"}>{formError.name}</div>} 
                                            </div>
                                        </div>

                                        <div className="form-field">
                                            <div className="form-group"> 
                                                <label>Mobile Number <sup>*</sup></label> 
                                                <input type="text" className="form-control" placeholder="03241234567" name="phone" onChange={onChangeScheduleValue} value={scheduleValue.phone} /> 
                                                {<div className={formError.phone ? "error" : "d-none"}>{formError.phone}</div>} 
                                            
                                            </div>
                                        </div>
    

                                        <div className="form-btn text-center mb-5">
                                            <button type="button" className="genral-btn" onClick={ () =>  showBookingList(scheduleValue) } >Get Schedule</button> 
                                        </div>

                                        {/* booking list table */}
                                        <table className={(Object.keys(formError).length === 0) && (avaliableBuses.length > 0) ?  "table table-bordered mt-5" : "d-none"  }>
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
                                                                <td><button data-toggle="modal" data-target="#myModal" className="genral-btn">Booking</button></td>
                                                            </tr> 
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>



                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact us form  --> */}

            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">{scheduleValue.name} Ticket Booked!</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        {/* Modal body.. */}
                        <h5>You have booked a ticket from {scheduleValue.departure} to {scheduleValue.destination} at {scheduleValue.day}. 
                        {/* Your ticket price is `${avaliableBuses[0].price}`  */}
                        </h5>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseTickets