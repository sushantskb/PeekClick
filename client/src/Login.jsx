/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        axios.post("http://localhost:3001/login", { username, password })
            .then(res => {
                // console.log(res.data);
                if(res.data.Status === "Success"){
                    navigate("/home");
                } else{
                    navigate("/");
                }
                
            }).catch(err=> console.log(err));
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-container">
                <div class="flex justify-center">
                    <div class="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
                        <div class=" w-full md:w-3/4">
                            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4" style={{ marginBottom: "32px" }}>

                                <h1 class="font-semibold text-xl md:text-5xl text-white m-2">Login to your account</h1>

                            </div>
                            <div class="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8" style={{ lineHeight: "50px" }}>
                                <div class="">
                                    <input 
                                        type="text" 
                                        placeholder="User Name"
                                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" 
                                        onChange={(e)=> setUsername(e.target.value)}
                                    />
                                </div>
                                <div class="">
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" 
                                        onChange={(e)=> setPassword(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div class="text-center mt-7" style={{ lineHeight: "50px", marginBottom: "29px" }}>
                                <button
                                    class="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-purple-400 to-blue-400  font-medium m-2 mb-6" 
                                    type="submit">
                                    Sign
                                    In
                                </button>
                            </div>

                        </div>
                        <div class="h-[100%] w-full md:w-1/3  bg-gradient-to-l from-purple-400 to-blue-400  items-center flex justify-center">

                            <div class="text-white text-base font-semibold text-center my-10 space-y-2 m-2" style={{lineHeight: "51px"}}>
                                <h1 class="text-5xl">New Here?</h1>
                                <h1 class="">Sign Up and explore here</h1>
                                <Link to="/" class="bg-white rounded-2xl px-4 text-purple-400 py-1">SignUp</Link>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </form>
    )
}

export default Login;