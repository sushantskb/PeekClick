/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
function Register() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        axios.post("http://localhost:3001/register", {username, email, password})
        .then(res =>{
            alert("Created")
        }).catch(err => console.log(err))
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-container">
                <div class="flex justify-center">
                    <div class="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
                        <div class=" w-full md:w-3/4">
                            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4" style={{ marginBottom: "32px" }}>

                                <h1 class="font-semibold text-xl md:text-5xl text-white m-2">Register your Account</h1>

                            </div>
                            <div class="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8" style={{ lineHeight: "50px" }}>
                                <div class="">
                                    <input 
                                        type="text" 
                                        placeholder="User Name"
                                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" 
                                        name="username"
                                        onChange={(event)=>{
                                            setUsername(event.target.value)
                                        }}
                                    />
                                </div>
                                <div class="">
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" 
                                        name="email"
                                        onChange={(event)=>{
                                            setEmail(event.target.value)
                                        }}
                                    />
                                </div>
                                <div class="">
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" 
                                        onChange={(event)=>{
                                            setPassword(event.target.value)
                                        }}
                                    />
                                </div>

                            </div>
                            <div class="text-center mt-7" style={{ lineHeight: "50px", marginBottom: "29px" }}>
                                <button
                                    class=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-purple-400 to-blue-400  font-medium m-2 mb-6"
                                    type="submit"
                        
                                >
                                    Sign In 
                                </button>
                            </div>

                        </div>
                        <div
                            class="h-[100%] w-full md:w-1/3  bg-gradient-to-l from-purple-400 to-blue-400  items-center flex justify-center">

                            <div class="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
                                <h1 class="text-5xl">Already have an account ?</h1>
                                <h1 class="">Login In and explore here</h1>
                                <button class="bg-white rounded-2xl px-4 text-purple-400 py-1">Login</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div >
        </form>
    )
}

export default Register