// import { ResultType } from "@remix-run/router/dist/utils";
import React, { useState } from "react";
import {FaSearch, FaFilter} from "react-icons/fa";
import { Result } from "../components/Result";
import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api/user/search"
export const Search = (props) => {
    const [query,setQuery] = useState('');
    const [showpage, setShowpage] = useState(false);
    const [article,setArticle] = useState(props.articles);
    console.log(article)
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
    // const [articles, setArticles] = useState([])
    // const handleSubmit = () => {
    //     axios.get(baseURL).then((response) => {
    //       console.log(response.data);
    //       setArticles(response.data);
    //     });
    //   };
    
    //   if (!articles) return null;
    return (
        <div className=" mx-[10%]">
            <div className="  my-5"> 
                <div className="Heading text-3xl md:text-7xl text-center my-3">
                    BrowseBytes 
                </div>
                <div className="text-sm text-gray-400 mt-7 text-center">
                    Searching for articles on BrowseBytes
                </div>
            </div>
            <form onSubmit={handleSub}>
            <div className="Search flex flex-row justify-center items-center">
                <input value={query} onChange={(e)=>{setQuery(e.target.value)}}  className="border w-[75%] h-[37px] rounded-l-lg px-2 border-gray-300 rounded-r-none shadow-md" placeholder="Search" />
                <button type="submit" className="serchicon w-[20%] sm:w-[15%] md:w-[10%] h-[37px] flex flex-col justify-around bg-[#0d6efd] hover:shadow-lg rounded-r-lg">
                    <div className="flex flex-row mx-auto text-xs sm:text-base border-gray-300 rounded-md shadow-md text-white px-2">
                        <div className="my-auto mx-1">
                            <FaSearch className="mx-auto" />
                        </div>
                        <div>
                            Go
                        </div>
                    </div>

                </button>
            </div>
            </form>
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
            <div className="my-3 flex flex-col"> 
                {article.map((e , key)=>{
                    return (<Result title ={e.title} Article_id = {e.Article_id} author={e.author} summary ={e.summary} URL = {e.Link}/>)})
                }
            </div> 
        </div>
    )
}