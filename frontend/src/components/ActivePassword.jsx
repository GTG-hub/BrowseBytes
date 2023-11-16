import React from "react";
import { motion } from "framer-motion";

export const ActivePassword = () => {
    return(
      <motion.div
      className=" col-sm-8 flex flex-col"
      initial={{x:"100%"}}
      animate = {{x:"0%"}}
      transition = {{
          ease:"linear",
          duration: 0.5,
        }}
      id="password_right"
  >
        <div><h1 className="text-3xl font-bold text-white">Password Settings</h1></div>
        <div className="row flex flex-row mt-3">
           <div className="lable my-1 text-xs sm:text-base text-white">
               Old Password
           </div>
           <div>
            <input type="password" className="border w-[48%] my-1 p-1 text-md bg-[#011f4b] bg-opacity-0 rounded-xl" placeholder="Old Password" />
           </div>
        </div>
        <div className="row mt-">
          <div className="col flex flex-col">
             <div className="label my-1 text-xs sm:text-base text-white">
               New Password
             </div>
             <div>
               <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="password" placeholder="New Password" />
             </div>
          </div>
          <div className="col">
           <div className="label my-1 text-xs sm:text-base text-white">
             Confirmed Password
           </div>
           <div>
             <input className="border w-[98%] my-1 p-1 bg-[#011f4b] bg-opacity-0 rounded-xl" type="password" placeholder="New Password" />
           </div>
          </div>
       </div>
       <div className="mt-3 row mx-2">
          <button type="submit" className="border ease-in duration-300 p-2 w-full rounded-lg bg-slate-100 hover:text-white hover:bg-[#005b96] shadow-md hover:shadow-xl mx-1 mt-4">Update</button>
          {/* <!-- <button className="border p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Cancle</button> --> */}
       </div>
       </motion.div>
    )
}