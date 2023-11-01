import React from "react";

export const ActivePassword = () => {
    return(
        <div id="password_right" className="col-sm-8 flex flex-col">
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
    )
}