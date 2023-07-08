/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Card(props) {
    return (

        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
                <img class="object-cover w-full h-64" src={props.img} alt="" />
            </div>
            <div class="card-desc flex flex-col justify-between flex-1 p-6">
                <div class="flex-1">
                    <a href="#" class="block mt-2">
                        <p class="text-xl font-semibold text-black">{props.tittle}</p>
                        <p class="mt-3 text-base text-white">{props.desc}</p>
                    </a>
                </div>
                <div class="flex items-center mt-6">
                    <div class="flex-shrink-0">
                        <a href="#">
                            {/* <span class="sr-only">Michael Andreuzza</span> */}
                            <img class="w-10 h-10 rounded-full" src={props.image} alt="" />
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-black">
                            <a href="#" class="hover:underline">{props.name}</a>
                        </p>
                        <div class="flex space-x-1 text-sm text-white">
                            <time datetime="2020-03-16"> Mar 16, 2020 </time>
                            <span aria-hidden="true"> · </span>
                            <span> 6 min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;