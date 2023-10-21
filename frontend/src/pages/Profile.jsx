import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {FaUser,FaFolderPlus,FaFolder,FaBookmark} from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Profile = () => {
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

    return (
        <div>
                {/* <!-- sidebar and normal --> */}
    <div className="h-full my-1">
        <div className="row mx-1">
            <div className="col-sm-4 border-b sm:border-b-0 sm:border-r">
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
            </div>
            {/* <!-- account_right --> */}
            {activeProfile && (
                            <div id="account_right" className="col-sm-8 flex flex-col">
                            <div><h1 className="text-3xl font-bold">Account Settings</h1></div>
                              <form>
                                  <div className="row">
                                     <div className="col flex flex-col">
                                        <div className="label my-1 text-sm sm:text-base">
                                          First Name
                                        </div>
                                        <div>
                                          <input className="border w-[98%] my-1 p-1" type="text" placeholder="FirstName" />
                                        </div>
                                     </div>
                                     <div className="col">
                                      <div className="label my-1 text-sm sm:text-base">
                                        Last Name
                                      </div>
                                      <div>
                                        <input className="border w-[98%] my-1 p-1" type="text" placeholder="LastName" />
                                      </div>
                                     </div>
                                  </div>
                                  <div className="row">
                                    <div className="col flex flex-col">
                                       <div className="label my-1 text-sm sm:text-base">
                                         Email
                                       </div>
                                       <div>
                                         <input className="border w-[98%] my-1 p-1" type="email" placeholder="Email" />
                                       </div>
                                    </div>
                                    <div className="col">
                                     <div className="label my-1 text-sm sm:text-base">
                                       Phone Number 
                                     </div>
                                     <div>
                                       <input className="border w-[98%] my-1 p-1" type="text" placeholder="Phone Number" />
                                     </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                  <div className="col flex flex-col">
                                     <div className="label my-1 text-sm sm:text-base">
                                       Email
                                     </div>
                                     <div>
                                       <input className="border w-[98%] my-1 p-1" type="email" placeholder="Email" />
                                     </div>
                                  </div>
                                  <div className="col">
                                   <div className="label my-1 text-sm sm:text-base">
                                     Email2 
                                   </div>
                                   <div>
                                     <input className="border w-[98%] my-1 p-1" type="email" placeholder="Email2" />
                                   </div>
                                  </div>
                               </div>
                               <div className="row">
                                <div className="col flex flex-col">
                                   <div className="label my-1 text-sm sm:text-base">
                                     Designation
                                   </div>
                                   <div>
                                     <input className="border w-[98%] my-1 p-1" type="text" placeholder="Designation" />
                                   </div>
                                </div>
                                <div className="col">
                                 <div className="label my-1 text-sm sm:text-base">
                                   Phone Number 
                                 </div>
                                 <div>
                                   <input className="border w-[98%] my-1 p-1" type="text" placeholder="Phone Number" />
                                 </div>
                                </div>
                             </div>
                             <div className="row className flex-col">
                              <div className="biolabel text-sm sm:text-base">
                                Bio
                              </div>
                              <div>
                                <textarea className="border w-[100%] h-[100px]"></textarea>
                              </div>
                           </div>
                                  
                              </form>
                          </div>
            )}

            {/* <!-- account_right ends --> */}
            {/* <!-- password  --> */}
            {activePassword && (
                            <div id="password_right" className="account_right col-sm-8 flex flex-col">
                            <div><h1 className="text-3xl font-bold">Password Settings</h1></div>
                            <div className="row flex flex-row mt-3">
                               <div className="lable my-1 text-xs sm:text-base">
                                   Old Password
                               </div>
                               <div>
                                <input type="password" className="border w-[48%] my-1 p-1 text-md" placeholder="old password" />
                               </div>
                            </div>
                            <div className="row mt-">
                              <div className="col flex flex-col">
                                 <div className="label my-1 text-xs sm:text-base">
                                   New Password
                                 </div>
                                 <div>
                                   <input className="border w-[98%] my-1 p-1" type="password" placeholder="New Password" />
                                 </div>
                              </div>
                              <div className="col">
                               <div className="label my-1 text-xs sm:text-base">
                                 Confirmed Password
                               </div>
                               <div>
                                 <input className="border w-[98%] my-1 p-1" type="password" placeholder="New Password" />
                               </div>
                              </div>
                           </div>
                           <div className="mt-3 row mx-2">
                              <button className="border ease-in duration-300 p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Update</button>
                              {/* <!-- <button className="border p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Cancle</button> --> */}
                           </div>
                          </div>
            )}

            {/* <!-- password ends / --> */}
            {/* <!-- Workspace --> */}
            {activeWorkspace && (
                <div id="workspace_right" className="account_right col-sm-8 flex flex-col">
                <div><h1 className="text-3xl font-bold">Workspace</h1></div>
                <div className="row my-2">
                  <div className="col-sm-4">
                    <div className="flex flex-row hover:shadow-lg justify-around hover:bg-black hover:text-white hover:border-b-2 hover:border-b-white">
                      <div className="mx-1"><FaFolderPlus/></div>
                      <div className="mx-1">create folder</div>
                    </div>  
                  </div>
                </div>
                <div id="folderspalce" className="row my-5 ">
                   <div className="col-sm-6 flex flex-col justify-center items-center">
                      <div className="w-[100px] h-[130px] border flex flex-col items-center">
                        <div className="my-auto">
                          <div>
                            <div className="w-[75px] h-[75px] flex justify-center items-center bg-blue-950">
                              <div className="w-[50px] h-[50px] flex justify-center items-center bg-sky-900">
                                <div className="w-[25px] h-[25px] flex justify-center items-center bg-cyan-600">
                                </div>
                              </div>     
                            </div>
                          </div>
                          
                          <div className="h-[10px] my-2 bg-gray-100"></div>
                          <div className="col-sm-8 h-[5px] my-1 bg-gray-100"></div>
  
                        </div>
                        
                      </div>
                      <div className="col-sm-4 my-2">
                        <div className="h-[30px] w-[80px] mx-auto border rounded-sm shadow-sm">
                          <div className="flex flex-row justify-around">
                            <div className="text-black my-auto"><FaBookmark /></div>
                           <div className="my-auto">Save</div>
                          </div>
                          
                           
                        </div>
                      </div>
                      
                   </div>
                   <div className="col-sm-6 p-1">
                    <div className="relative w-[80%] h-full border mx-auto hover:shadow-lg overflow-hidden">
                      <div className=" h-[25px] w-full bg-gray-100 ">
                        <FaFolderPlus className="fa-solid fa-folder-plus mt-1 mr-2 float-right"/>
                        {/* <i className="fa-solid fa-folder-plus mt-1 mr-2 float-right"></i> */}
                      </div>
                       <div className="flex justify-around">
                        <div className="row">
                           <div className="col">
                            <div className="fs-1 m-3">
                                <FaFolder />
                              {/* <i className="folder fa-solid fa-folder"></i> */}
                             </div>
                             <div className="fs-1 m-3">
                                <FaFolder/>
                              <i className="folder fa-solid fa-folder"></i>
                             </div>
                           </div>
                           <div className="col">
                            <div className="fs-1 m-3">
                                <FaFolder/>
                              <i className="folder fa-solid fa-folder"></i>
                             </div>
                             <div className="fs-1 m-3">
                                <FaFolder/>
                              <i className="folder fa-solid fa-folder"></i>
                             </div>
                           </div>
                        </div>
                           {/* <!-- <div className="fs-1 m-3">
                            <i className="fa-solid fa-folder"></i>
                           </div>
                           <div className="fs-1 m-3">
                            <i className="fa-solid fa-folder"></i>
                           </div> --> */}
                       </div>
                    </div>
                 </div>
                </div>
                <div className="row my-1 mx-auto">
                    <div className="text-sm text-center">
                        Save and organise the articles
                    </div>
                </div>
                
              </div>
            )}
            

            {/* <!-- Workspace ends --> */}
            {/* <!-- History --> */}
            {activeHistoryspace && (
                            <div id="history_right" className="col-sm-8 h-[600px]">
                            <div className="row my-2 font-bold text-3xl">
                              <h1>History</h1>
                            </div>
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                                
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
              
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
              
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
              
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-sm-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
                            <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
                              <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
                                 <div className="col-6">
                                  <div className="text-sm sm:text-base">Article name</div>
                                 </div>
                                 <div className="col-6">
                                  <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
                                 </div>
                              </div>
                              <div className="row mx-2 text-sm">
                                {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
                                {/* <a className="text-primary" href="#">Here goes the link</a> */}
                                <Link className="text-primary" to={'/'}>Here goes the link</Link>
                              </div>
                              <div className="row my-1 mx-2 text-sm">
                                <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
                              </div>
                            </div>
              
                          </div>
            )}

            {/* <!-- History ends --> */}
            
          </div>
    </div>
   {/* <!-- sidebar ends --> */}
        </div>
    )
};