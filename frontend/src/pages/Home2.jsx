import React, { useEffect, useState } from 'react'
import "../css/Home2.css"
import axios from "axios";
import {FaSearch, FaFilter} from "react-icons/fa";
import { Search } from "./Search";
import Typed from 'typed.js'
import Navbar from './Navbar1';
import { motion, AnimatePresence } from "framer-motion";
import {BsEmojiSunglasses} from "react-icons/bs";
import { getShow, setShow } from '../services/LocalStorageService';

export default function Home2() {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
    getCurrentTime();

    // You can update the greeting every minute if needed
    const intervalId = setInterval(getCurrentTime, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const [query,setQuery] = useState('');
  const [showpage, setShowpage] = useState(false);
  const [article,setArticle] = useState({});
  const {show} = getShow();
  // console.log(show);
  
  
  const baseURL = "http://127.0.0.1:8000/api/user/search/";
  const handleSub = async(e) => {
      e.preventDefault();
      // console.log(query)

          try{
              const response = await axios.post(baseURL+query+'/',{success:"true"})
              console.log(response);
              setArticle(response.data);
              setShowpage(true);
              console.log(show)
                setShow(1);
              console.log(response.data)
          }catch(error){
              console.log(error)
          }       
  }
    // show = getShow();
    const el = React.useRef(null);
    const el2 = React.useRef(null);
    const t1 = document.getElementById("t1")
    const t2 = document.getElementById("t2")
    const [clicked, setClicked] = useState(false);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Google Scholar got you yawning!?", "Step into a new realm of research enthusiasm where every search sparks curiosity"],
      typeSpeed: 30,
      backSpeed : 30,
      showCursor:false
    });
    const typed2 = new Typed(el2.current,{
      strings:["BrowseBytes"],
      typeSpeed:200,
      backSpeed:30,
      startDelay:3000,
      showCursor:false
    })
    return () => {
        typed.destroy();
        typed2.destroy();
      };
    },[]);
    const handleClick =()=>{
      setClicked(true);
    }
  return (
    
    <div>
      {clicked?<motion.div><Navbar/></motion.div>:<div/>}
      {showpage ?<Search articles ={article}/>:<div><AnimatePresence>
       {!clicked && <motion.div 
       exit={{ x: 600, opacity: 0 }}
       transition ={{duration:0}}
        className="typing-animation d-block" >
        <div id ="t1" ref ={el}/>
        <div className="bb" id="t2" ref ={el2}/>
        </motion.div>}
        
      </AnimatePresence>
        <AnimatePresence>
      {!clicked && <motion.div 
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="button__wrap">
        <button onClick={handleClick} className="button1">Good Morning</button>
        <div className="button__shadow"></div>
      </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
      {clicked && <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -30}}
        exit={{ opacity: 0, y: -30}}
        transition={{ duration: 1 }}
      className="Search flex flex-row justify-center items-center d-block">

        <div className="Heading  font-bold text-center flex flex-col mb-20">
          <div className='mx-1 kkk text-7xl'>BrowseBytes</div>
          
        </div>
        <form onSubmit={handleSub}>
          <div className=" flex flex-row w-[100%] my-3">
                <div className="w-[100%]">
                    <input value={query} placeholder="search" onChange={(e)=>{setQuery(e.target.value)}}  className="w-[100%] border h-12 rounded-l-full px-3 shadow-lg"/>
                    
                </div>
                <button type ="submit"  className="w-[20%] flex flex-row justify-center items-center border rounded-r-full text-white bg-[#0d6efd] shadow-lg">
                    <div className="my-auto">
                        <FaSearch/>
                    </div>
                    <div className="my-auto">
                        Go
                    </div>
                </button>
            </div>
            <div className = "text-center my-3">Where learning is fun</div>
            </form>
      
          </motion.div>
      }
      </AnimatePresence>
      </div>}
      
      </div>
  )
}
