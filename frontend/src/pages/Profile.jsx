import React, { useEffect } from "react";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {FaUser} from 'react-icons/fa';
import {ActiveHistory} from "../components/ActiveHistory";
import { ActivePassword } from "../components/ActivePassword";
import { ActiveWorkspace } from "../components/ActiveWorkspace";
import { ActiveProfile } from "../components/ActiveProfile";
import {motion, useAnimationControls} from "framer-motion"

export const Profile = () => {
    const controls = useAnimationControls()
    const [activeProfile,setActiveProfile] = useState(true); 
    const [activePassword,setActivePassword] = useState(false);
    const [activeWorkspace,setActiveWorkspace] = useState(false);
    const [activeHistoryspace,setActiveHistoryspace] = useState(false)
    const [activeProfilecss,setActiveProfilecss] = useState('bg-primary text-white shadow-xl');
    const [activePasswordcss,setActivePasswordcss] = useState('');
    const [activeHistoryspacecss,setActiveHistoryspacecss] = useState('');
    const [activeWorkspacecss,setActiveWorkspacecss] = useState('');
    const handleProfile = () =>{
        setActiveProfile(true);
        setActiveHistoryspace(false);
        setActiveWorkspace(false);
        setActivePassword(false);
        setActiveProfilecss('bg-primary text-white shadow-xl my-0');
        setActiveHistoryspacecss('');
        setActivePasswordcss('');
        setActiveWorkspacecss('');
    }

    const handlePassword = () => {
        setActiveProfile(false);
        setActiveHistoryspace(false);
        setActiveWorkspace(false);
        setActivePassword(true);
        setActiveProfilecss('');
        setActiveHistoryspacecss('');
        setActivePasswordcss('bg-primary text-white shadow-xl');
        setActiveWorkspacecss('');
    }
    const handleWorkspace = () => {
        setActiveProfile(false);
        setActiveHistoryspace(false);
        setActiveWorkspace(true);
        setActivePassword(false);
        setActiveProfilecss('');
        setActiveHistoryspacecss('');
        setActivePasswordcss('');
        setActiveWorkspacecss('bg-primary text-white shadow-xl');
    }
    const handleHistory = () => {
        setActiveProfile(false);
        setActiveHistoryspace(true);
        setActiveWorkspace(false);
        setActivePassword(false);
        setActiveProfilecss('');
        setActiveHistoryspacecss('bg-primary text-white shadow-xl');
        setActivePasswordcss('');
        setActiveWorkspacecss('');
    }

    useEffect(() => {
        controls.start(i => ({
          opacity: 0,
          x: 100,
          transition: { delay: i * 0.3 },
        }))
      }, [])

    return (
        <div>
            <div className="h-full sm:h-[99vh] my-1">
                
                <div className="row mx-1 h-full">
                    <motion.div 
                      initial={{x:"-100%"}}
                      animate = {{x:"0%"}}  
                      transition = {{
                        ease:"linear",
                        duration: 0.5,
                      }}
                      className="col-sm-4 border-b sm:border-b-0 sm:border-r"
                    >
                    {/* <i className="fa-solid fa-user border rounded-circle p-4 border-black fs-1 mb-2"></i> */}
                      
                        <ul className="flex flex-col justify-center items-center p-0">
                            <li className="text-center my-auto py-2 w-full"><div> <div className="flex justify-center items-center p-2 fs-1 mb-2"><FaUser className=" border rounded-full p-3 text-7xl"/> </div></div> <div className=" font-bold text-xl">username</div> </li>
                            <li className="border mb-1 w-full"></li>
                            <li id="account_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white  py-2 w-full ${activeProfilecss}`} onClick={handleProfile}>Account</li>
                            <li id="password_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activePasswordcss}`} onClick={handlePassword}>Password</li>
                            <li id="workspace_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activeWorkspacecss}`} onClick={handleWorkspace}>Workspace</li>
                            <li id="history_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activeHistoryspacecss}`} onClick={handleHistory}>History</li>
                            {/* <!-- <li id="notifications_left" className="text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2">Notifications</li> --> */}
                        </ul>
                    </motion.div>
                   
                        {activeProfile && (<ActiveProfile />)}
                        {activePassword && (<ActivePassword/>)}
                        {activeWorkspace && (<ActiveWorkspace/> )}
                        {activeHistoryspace && (<ActiveHistory />)}


                </div>
            </div>
        </div>
    )
};