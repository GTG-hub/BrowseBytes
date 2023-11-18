// import React, { useState } from "react";
import axios from "axios";
// import { SearchResults } from "./Searchresults";
import { Search } from "./Search";
import {FaSearch} from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import Typed from 'typed.js';
import "../css/Home.css"


export const Home = () => {
    const [query,setQuery] = useState('')
    const [showpage, setShowpage] = useState(false)
    const [article,setArticle] = useState({})
    
    // console.log(query);
    const baseURL = "http://127.0.0.1:8000/api/user/search/";
    const handleSub = async(e) => {
        e.preventDefault();
        console.log(query)
            try{
                const response = await axios.post(baseURL+query+'/',{success:"true"})
                console.log(response);
                setArticle(response.data);
                setShowpage(true);
                console.log(response.data)
            }catch(error){
                console.log(error)
            }
            
    }
    return(
        <>
        {showpage? <Search articles={article}/> :
        <div>
        <form>
        <div className="background w-[100%]">
        <div className=" flex flex-col justify-center items-center h-[100vh] mx-[20%]">
            <div className="Heading text-9xl my-8">
                Browse Bytes
            </div>
            <div className=" flex flex-row w-[100%] shadow-lg">
                <div className="w-[80%]">
                    <input value={query} placeholder="search" onChange={(e)=>{setQuery(e.target.value)}}  className="w-[100%] border h-12 rounded-l-lg px-3"/>
                </div>
                <button  type ="submit" onClick={handleSub} className="w-[20%] flex flex-row justify-center items-center border rounded-r-lg text-white bg-[#0d6efd]">
                    <div className="my-auto">
                        <FaSearch/>
                    </div>
                    <div className="my-auto">
                        Go
                    </div>
                </button>
            </div>
        </div>
    </div>

        </form>
       

        </div>
        
        }
        
        </>

    )
}