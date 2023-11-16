import React from "react";
import {motion} from "framer-motion"

export const ActiveProfile = () => {
    return (
      <motion.div
      className=" col-sm-8 flex flex-col"
      initial={{x:"100%"}}
      animate = {{x:"0%"}}
      transition = {{
          ease:"linear",
          duration: 0.5,
        }}
      id="profile_right"
  >
        <div><h1 className="text-3xl font-bold text-white">Account Settings</h1></div>
          <form>
              <div className="row">
                 <div className="col flex flex-col">
                    <div className="label my-1 text-sm sm:text-base text-white">
                      First Name
                    </div>
                    <div>
                      <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="text" placeholder="FirstName" />
                    </div>
                 </div>
                 <div className="col">
                  <div className="label my-1 text-sm sm:text-base text-white">
                    Last Name
                  </div>
                  <div>
                    <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="text" placeholder="LastName" />
                  </div>
                 </div>
              </div>
              <div className="row">
                <div className="col flex flex-col">
                   <div className="label my-1 text-sm sm:text-base text-white">
                     Email
                   </div>
                   <div>
                     <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="email" placeholder="Email" />
                   </div>
                </div>
                <div className="col">
                 <div className="label my-1 text-sm sm:text-base text-white">
                   Phone Number 
                 </div>
                 <div>
                   <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="text" placeholder="Phone Number" />
                 </div>
                </div>
             </div>
             <div className="row">
              <div className="col flex flex-col">
                 <div className="label my-1 text-sm sm:text-base text-white">
                   Email
                 </div>
                 <div>
                   <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="email" placeholder="Email" />
                 </div>
              </div>
              <div className="col">
               <div className="label my-1 text-sm sm:text-base text-white">
                 Email2 
               </div>
               <div>
                 <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="email" placeholder="Email2" />
               </div>
              </div>
           </div>
           <div className="row">
            <div className="col flex flex-col">
               <div className="label my-1 text-sm sm:text-base text-white">
                 Designation
               </div>
               <div>
                 <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="text" placeholder="Designation" />
               </div>
            </div>
            <div className="col">
             <div className="label my-1 text-sm sm:text-base text-white">
               Phone Number 
             </div>
             <div>
               <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="text" placeholder="Phone Number" />
             </div>
            </div>
         </div>
         <div className="row className flex-col">
          <div className="biolabel text-sm sm:text-base text-white">
            Bio
          </div>
          <div>
            <textarea className="border w-[100%] h-[100px] bg-[#011f4b] rounded-xl"></textarea>
          </div>
       </div>
       <button type="submit" className="border ease-in duration-300 p-2 w-full rounded-lg bg-slate-100 hover:text-white hover:bg-[#005b96] shadow-md hover:shadow-xl mx-1 mt-4">Update</button>
          </form>
          </motion.div>
    )
}