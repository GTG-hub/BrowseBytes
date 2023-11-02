import React from "react";
import {FaSearch} from "react-icons/fa";
import "./Home.css"

export const Home = () => {
    return(
        <div className="background w-[100%]">
            <div className=" flex flex-col justify-center items-center h-[100vh] mx-[20%]">
                <div className="Heading text-9xl my-8">
                    Browse Bytes
                </div>
                <div className=" flex flex-row w-[100%] shadow-lg">
                    <div className="w-[80%]">
                        <input placeholder="search" className="w-[100%] border h-12 rounded-l-lg px-3"/>
                    </div>
                    <div className="w-[20%] flex flex-row justify-center items-center border rounded-r-lg text-white bg-[#0d6efd]">
                        <div className="my-auto">
                            <FaSearch/>
                        </div>
                        <div className="my-auto">
                            Go
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}