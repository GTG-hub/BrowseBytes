import React from "react";
import {FaFolderPlus,FaFolder,FaBookmark} from 'react-icons/fa';
import {MdFolderDelete,MdFolder} from "react-icons/md"
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";


export const ActiveWorkspace = () => {
  const [create,setCreate] = useState(false);
  const folders = ['Business','Entertainment']
  const len = folders.length
    return (
      <motion.div
        className=" col-sm-8 flex flex-col"
        initial={{x:"100%"}}
        animate = {{x:"0%"}}
        transition = {{
          ease:"linear",
          duration: 0.5,
        }}
        id="workspace_right"
      >
        <div><h1 className="text-3xl font-bold text-white">Workspace</h1></div>
        <AnimatePresence>
              {create && 
                  <motion.div
                    layout
                    className=" absolute top-[25%] left-[10%] md:top-[20%] md:left-[25%] flex flex-col w-[80%] md:w-[50%]  z-1 bg-gray-100 py-3 px-3 rounded-md shadow-xl"
                    
                  >
                    
                      <div className="row flex flex-col  bg-[#f3f6f4]">
                        <div className="flex flex-col items-end text-xl text-[#011f4b]" onClick={()=>setCreate(false)}><MdFolderDelete/></div>
                        <div className="w-full text-center font-semibold italic ">Organize Your Folder</div>
                        <form className="flex flex-col">
                          <label for="folderName" className="text-sm italic font-bold mx-1">Folder Name</label>
                          <input name="folderName" placeholder="name" className="border rounded-md w-full mx-1 h-[30px] my-3 p-2"/>
                          <label for="article" className="text-sm italic font-bold mx-1">Select BookMark Articles</label>
                          <select name="aticle" className="border rounded-md w-full mx-1 h-[30px] my-3">
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                          </select>
                          <label for="article" className="text-sm italic font-bold mx-1">Select History Articles</label>
                          <select name="aticle" className="border rounded-md w-full mx-1 h-[30px] my-3">
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                            <option value={"article"}>article</option>
                          </select>
                          <button className="w-[100%] bg-[#011f4b] text-white h-[30px] hover:shadow-2xl rounded-md mx-1 my-2 shadow-lg" onClick={()=>setCreate(false)} >Create</button>
                        </form>
                      </div>
                  </motion.div>
              }
              
            </AnimatePresence>
        <div onClick={()=>{setCreate(!create)}} className="row my-2">
          <div className="col-sm-4">
            <div className="flex flex-row hover:shadow-lg justify-around bg-[#f3f6f4] text-[#011f4b] rounded-sm" onClick={() => setCreate(true)}>
              <div className="mx-1 flex flex-col justify-center items-center text-[#011f4b]"><FaFolderPlus className="my-auto"/></div>
              <div className="mx-1">Create Folder</div>
            </div>  

          </div>
        </div>
        {!len && 
            (<div onClick={()=>{setCreate(false)}} >
              <div id="folderspalce" className="row my-5 ">
                <div className="col-sm-6 flex flex-col justify-center items-center">
                  <div className="w-[100px] h-[130px] border flex flex-col items-center">
                    <div className="my-auto">
                      <div>
                        <div className="w-[75px] h-[75px] flex justify-center items-center bg-blue-950">
                          <div className="w-[50px] h-[50px] flex justify-center items-center bg-sky-900">
                            <div className="w-[25px] h-[25px] flex justify-center items-center bg-cyan-600"></div>
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
                            {/* <i className="folder fa-solid fa-folder"></i> */}
                          </div>
                        </div>
                        <div className="col">
                          <div className="fs-1 m-3">
                            <FaFolder/>
                            {/* <i className="folder fa-solid fa-folder"></i> */}
                          </div>
                          <div className="fs-1 m-3">
                            <FaFolder/>
                            {/* <i className="folder fa-solid fa-folder"></i> */}
                          </div>
                        </div>
                      </div>
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
            )

        }
        {len && 
          (
            <div className="flex flex-row my-4">
              {
                folders.map((value,key)=>(
                  <motion.div 
                    whileHover={{scale:1.2}}
                    whileTap={{scale:1.1}}
                    drag
                    className=" flex flex-col mx-2">
                     <div className="text-5xl my-1 mx-4 hover:cursor-pointer text-white"><MdFolder/></div>
                     <div className="my-1 mx-4 font-bold italic text-white">{value}</div>
                  </motion.div>
                ))
              }
            </div>
          )
        }
        
        
        
      </motion.div>
    )
}