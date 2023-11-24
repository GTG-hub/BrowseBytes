import React from "react";
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import {FaUser} from 'react-icons/fa';
import {ActiveHistory} from "../components/ActiveHistory";
import { ActivePassword } from "../components/ActivePassword";
import { ActiveWorkspace } from "../components/ActiveWorkspace";
import { ActiveProfile } from "../components/ActiveProfile";
import {getToken, removeToken} from '../services/LocalStorageService';
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { remToken } from "../features/authSlice";
import { useGetUserQuery } from "../services/userAuthAPI";
import Navbar from "./Navbar1";
export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { access_token } = getToken()
    const {data , isSuccess} = useGetUserQuery(access_token)
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        articles: {},
        author: ""
      })
    
      // Store User Data in Local State
      useEffect(() => {
        if (data && isSuccess) {
          setUserData({
            email: data.email,
            name: data.name,
            article: data.article,
            author: data.Author
          })
        }
      }, [data, isSuccess])
    console.log(data)
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
        setActiveProfilecss('bg-primary text-white shadow-xl');
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

    const handleLogout = () => {
        dispatch(remToken({access_toke : null}))
        removeToken();
        navigate('/');
    }

    return (
        <div>
            <Navbar/>
            <div className="h-full my-1 w-[100vw]">
                <div className="row mx-1">
                    <div className="col-sm-4 border-b sm:border-b-0 sm:border-r">
                    {/* <i className="fa-solid fa-user border rounded-circle p-4 border-black fs-1 mb-2"></i> */}
                      
                        <ul className="flex flex-col justify-center items-center p-0">
                            <li className="text-center my-auto py-2 w-full"><div> <div className="flex justify-center items-center p-2 fs-1 mb-2"><FaUser className=" border rounded-full p-3 text-7xl"/> </div></div> <div className=" font-bold text-xl">{userData.email}</div> </li>
                            <li className="border mb-1 w-full"></li>
                            <li id="account_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white  py-2 w-full ${activeProfilecss}`} onClick={handleProfile}>Account</li>
                            <li id="password_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activePasswordcss}`} onClick={handlePassword}>Password</li>
                            {/* <li id="workspace_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activeWorkspacecss}`} onClick={handleWorkspace}>Workspace</li> */}
                            <li id="history_left" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full ${activeHistoryspacecss}`} onClick={handleHistory }>History</li>
                            <Link id="history_left" className="text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full" to="/">Home</Link>

                            <li id="" className={`text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2 w-full`} onClick={handleLogout}>Logout</li>

                            {/* <!-- <li id="notifications_left" className="text-center my-auto hover:bg-[#0d6efd] hover:border hover:text-white py-2">Notifications</li> --> */}
                        </ul>
                    </div>
                    {activeProfile && (<ActiveProfile name={userData.name} email ={userData.email}/>)}
                    {activePassword && (<ActivePassword/>)}
                    {activeWorkspace && (<ActiveWorkspace/> )}
                    {activeHistoryspace && (<ActiveHistory articles={userData.article} />)}
                  </div>
            </div>
        </div>
    )
};