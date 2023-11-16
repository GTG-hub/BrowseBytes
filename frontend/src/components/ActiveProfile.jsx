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
       <button type="submit" className="border ease-in duration-300 p-2 w-full rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Update</button>
          </form>
          </motion.div>
    )
}