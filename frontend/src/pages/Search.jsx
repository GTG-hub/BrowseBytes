// import { ResultType } from "@remix-run/router/dist/utils";
import React from "react";
import {FaSearch, FaFilter} from "react-icons/fa";
import { Result } from "../components/Result";
import 'animate.css';

export const Search = () => {
    return (
        <div className="mx-[10%]">
            <div className="  my-5"> 
                <div className="Heading text-3xl md:text-7xl text-center my-3">
                    BrowseBytes 
                </div>
                <div className="text-sm text-gray-400 mt-7 text-center">
                    Searching for articles on BrowseBytes
                </div>
            </div>
            <div className="Search flex flex-row justify-center items-center">
                <input className="border w-[75%] h-[37px] rounded-l-lg px-2 border-gray-300 rounded-r-none shadow-md" placeholder="Search" />
                <div className="serchicon w-[20%] sm:w-[15%] md:w-[10%] h-[37px] flex flex-col justify-around bg-[#0d6efd] hover:shadow-lg rounded-r-lg">
                    <div className="flex flex-row mx-auto text-xs sm:text-base border-gray-300 rounded-md shadow-md text-white px-2">
                        <div className="my-auto mx-1">
                             <FaSearch className="mx-auto" />
                        </div>
                        <div>
                            Go
                        </div>
                    </div>

                </div>
            </div>
            <div className="border my-7 w-[80%] mx-auto"></div>
            <div className="mx-[10%] flex flex-row justify-between">
                <div className="text-3xl">
                    Search Results
                </div>
                <div className="">
                    <div className="bg-[#0d6efd] text-white flex flex-row my-1 py-1 px-4 border rounded-lg" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="flex flex-col justify-center">
                            <FaFilter className="" />
                        </div>
                        <div className="">
                            Filter
                        </div>
                        <ul className="dropdown-menu">
                            <li><div className="dropdown-item">A to Z</div></li>
                            <li><div className="dropdown-item">Z to A</div></li>
                            <li><div className="dropdown-item">Most visited</div></li>
                            <li><div className="dropdown-item">Latest to oldest</div></li>
                            <li><div className="dropdown-item">Oldest to latest</div></li>
                          </ul>
                    </div>
                </div>                                                  
            </div>
            <div className="wow my-3 flex flex-col">  
                <Result/>
                <Result/>
                <Result/>
            </div> 
        </div>
    )
}