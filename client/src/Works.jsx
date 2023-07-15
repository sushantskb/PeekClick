/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Works(props) {
    return (
        <div>
            



            <div class="work-container flex justify-center">
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div class="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                            <div class="work-content flex flex-col md:flex-row items-center">
                                <div class=" w-full overflow-hidden"> <img src={props.mainImage} alt=""
                                    class="" /> </div>
                                <div class="md:w-2/3 m-4 ">
                                    <div class="flex text-gray-500 text-sm m-2">
                                        <div class="m-1 font-bold">Vlog,</div>
                                        <div class="m-1">31 March, 2023</div>
                                    </div>
                                    <div class="font-bold text-black text-xl m-2">{props.tittle}</div>
                                    <div class="text-sm text-gray-500 mt-4 m-2"><a href="#">{props.details}</a></div>
                                    <div class="flex cursor-pointer">
                                        <div class="m-2"> <img src={props.img} alt=""
                                            class="round-img" /> </div>
                                        <div class="grid m-1">
                                            <div class="font-bold text-sm hover:text-gray-600 mt-2">{props.name}</div>
                                            <div class=" text-sm hover:text-gray-600">
                                                {props.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Works;