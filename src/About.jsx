import React from "react";
import Navbar from "./Navbar";
function About() {
    return (
        <div>
        <Navbar />
            <section class="text-black body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex justify-content-center flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">
                            <h1 class="title-font font-large text-xxl mb-2 text-gray-900" style={{fontSize: "50px"}}>Sushant Kumar Bishoi</h1>
                            <div class="leading-relaxed" style={{fontSize: "20px"}}>Full Stack Developer || Mern Stack Developer || Web Development Lead || Cyber Security Lead.</div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">5+</h2>
                            <p class="leading-relaxed">Websites</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">5+</h2>
                            <p class="leading-relaxed">Web App</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">2 Years</h2>
                            <p class="leading-relaxed">Experience</p>
                        </div>
                    </div>
                    <div class="img-cont lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img class="object-cover object-center about-img" src="https://i.imgur.com/d6vo3wt.jpg" alt="stats" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
