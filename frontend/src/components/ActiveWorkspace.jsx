import React from "react";
import {FaFolderPlus,FaFolder,FaBookmark} from 'react-icons/fa';


export const ActiveWorkspace = () => {
    return (
        <div id="workspace_right" className="col-sm-8 flex flex-col">
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
    )
}