import React from "react";

export default function Register() {
    return (
        <>
            <div className="container">
                <form name="contact" netlify>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-contrl" id="firstName" placeholder="Enter First Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-contrl" id="email" placeholder="Enter Email Id" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea type="text" className="form-contrl" id="message" placeholder="Enter Message" ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <button className="btn btn-primary" type="clear">Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}