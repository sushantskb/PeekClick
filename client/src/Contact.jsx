import React, { useState } from "react";
import Navbar from "./Navbar";
function Contact(){
    const [details, setDetails] = useState({
        fName: "",
        email: ""
    });
    function handleChange(event){
        const {name, value} = event.target;

        setDetails(preValue=>{
            return {
                ...preValue,
                [name]:value
            }
        })
    }
    
    return (
        <div>
            <Navbar />
            <div className="contact-container grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk! {details.fName}</h2>
                        <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.imgur.com/9c0N76Y.png" alt="" className="contact-img p-6 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input 
                            onChange={handleChange}
                            name="fName" 
                            value={details.fName}
                            id="name" 
                            type="text" 
                            placeholder="Write your name"        
                            className="w-full p-3 rounded dark:bg-gray-800" 
                        />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input 
                            onChange={handleChange}
                            value={details.email}
                            id="email" 
                            type="email" 
                            placeholder="Write your email"
                            className="w-full p-3 rounded dark:bg-gray-800" 
                            name="email"
                        />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea 
                            placeholder="Write your message here"
                            id="message" 
                            rows="3" 
                            className="w-full p-3 rounded dark:bg-gray-800">
                        </textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;