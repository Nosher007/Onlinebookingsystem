import React, { useState, useEffect } from 'react'

function Contact() {
    const formIntialValue = { fname : "", lname : "",  email : "", phone : "", msg: "" };
    // getting form values 
    const [formData, setFormData] = useState(formIntialValue);

    // getting form field errors 
    const [formError, setFormError] = useState({});

    // flag
    const [isSubmit, setIsSubmit] = useState(false);


    const getData = (event) => {
        let {name, value} = event.target; 
        setFormData(  { ...formData,  [name] : value  }) ;
    }
     
    const submitInfo = (event) => {
        event.preventDefault(); 
        // console.log("efwf11", formData );


        setFormError(validate(formData));
        setIsSubmit(true);

        // console.log("form errors", formError);

        // FOR RESET FORM 
        // if(Object.keys(formError).length > 0){
        //     setFormData(formIntialValue);
        // }

        // console.log("FormValues", formData);

    };   

    const saveBrowser = (user) => {
        localStorage.setItem('Customer', user.id );
    }
    
    useEffect(() => {
        // console.log("1" ,formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            formData.id = Math.random();
            
            // FOR RESET FORM 
            
            setFormData(formIntialValue);
            saveBrowser(formData);
            console.log("2",formData);
        }
      }, [formError]);

    const validate = (values) => {
        let errors = {};
        let regularExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i ; 
        // let passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
        let phoneno = /^\d{10}$/;

        if(values.fname == ""){
            errors.fname = "Please Enter Your First Name";
        }

        if(values.lname == ""){
            errors.lname = "Please Enter Your last Name";
        }

        if(values.email == ""){
            errors.email = "Please Enter Your Email";
        }else if(!regularExpression.test(values.email)){
            errors.email = "Please Enter Valid Email";
        }

        if(values.phone == ""){
            errors.phone = "Please Enter Your Mobie Number";
        }
        else if(!(values.phone).match(phoneno)){
            errors.phone = "Mobile Number only contain Digits";
        }

        return errors;

    };


  return (
    <>
       {/* <!-- banner  --> */}
        <section>
            <div className="inner-banner" style={{backgroundImage: "url('images/contact-banner.png')"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="inner-banner-text">
                                <h1>Contact Us</h1>
                                <span className="sub-heading">Tell us how we can help and we’ll get in touch shortly.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- banner  --> */}

        <div className="clearfix"></div>

        {/* <!-- contact us form  --> */}
        <section>
            <div className="contact-form-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lc-hd text-left">
                                {/* <h2>Contact Us</h2>
                                <p>{formData.fname + formData.lname}</p> */}
                                { (Object.keys(formError).length == 0 && isSubmit) ?   
                                    (<div className="jumbotron">
                                        <div className="container">
                                            <h1>Thank You! We will contact you soon.</h1> 
                                        </div>
                                    </div>) : false 
                                }
                            </div>
                            <div className="lc-form contact-us-form mt-0">
                                <form onSubmit={submitInfo}  > 
                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <input
                                             type="text"
                                             className="form-control"
                                             placeholder="First Name" 
                                             onChange={getData} 
                                             name="fname" 
                                             value={formData.fname} />
                                            <div className={(formError.fname) ? "error" : "d-none"}>{formError.fname}</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" id="lname" placeholder="Last Name" onChange={getData} value={formData.lname} name="lname"  />
                                            <div className={(formError.lname) ? "error" : "d-none"}>{formError.lname}</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" id="email" placeholder="Email Address" onChange={getData} name="email" value={formData.email} />
                                            <div className={(formError.email) ? "error" : "d-none"}>{formError.email}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-field"> 
                                        <div className="form-group"> 
                                            <input type="tel" className="form-control" id="phn" placeholder="Phone Number" onChange={getData} name="phone" value={formData.phone} />
                                            <div className={(formError.phone) ? "error" : "d-none"}>{formError.phone}</div>
                                        </div> 
                                    </div>

                                    <div className="form-field w-100 mr-0"> 
                                        <div className="form-group"> 
                                            <textarea  className="form-control" placeholder="Your Message" onChange={getData} name="msg" value={formData.msg} id="" cols="30" rows="12"></textarea>
                                            <div className="error d-none">Please fill out this field.</div>
                                        </div> 
                                    </div> 

                                    <div className="form-btn text-center">
                                        <button type="submit" className="genral-btn" >submit</button> 
                                    </div>
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

export default Contact