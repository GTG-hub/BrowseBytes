import React, { useState } from "react";
import { motion } from "framer-motion";
import { getToken } from "../services/LocalStorageService";
import { useChangeUserPasswordMutation } from "../services/userAuthAPI";
import { CircularProgress, Typography } from "@mui/material";


export const ActivePassword = () => {
  const [server_error, setServerError] = useState({})
  const [showA, setShowA] = useState(false)
  const { access_token } = getToken()
  console.log(access_token)
  const [changePw , { isLoading }] = useChangeUserPasswordMutation()
    const handleSubmit=async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      "password": data.get('password'),
      "password2": data.get('password2')
    }
    console.log(actualData)
    const res = await changePw({actualData, access_token})
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data)
    }
    if (res.data) {
      console.log("hello")
      console.log(res.data)
      setShowA(true)
      console.log(showA)
    }
    }

    return(
      <motion.div
      className="col-sm-8 flex flex-col h-[100vh]"
      initial={{x:"100%"}}
      animate = {{x:"0%"}}
      transition = {{
          ease:"linear",
          duration: 0.5,
        }}
      id="password_right"
  >
      <form onSubmit={handleSubmit}>
        <div><h1 className="text-3xl font-bold">Password Settings</h1></div>
        {/* <div className="row flex flex-row mt-3">
           <div className="lable my-1 text-xs sm:text-base">
               Old Password
           </div>
           <div>
            <input type="password" readOnly={true} className="border w-[48%] my-1 p-1 font-bold" placeholder="........" />
           </div>
        </div> */}
        <div className="row mt-">
          <div className="col flex flex-col">
             <div className="label my-1 text-xs sm:text-base">
               New Password
             </div>
             <div>
               <input className="border w-[98%] my-1 p-1" name="password" type="password" placeholder="New Password" />
             </div>
          </div>
          <div className="col">
           <div className="label my-1 text-xs sm:text-base">
             Confirmed Password
           </div>
           <div>
             <input className="border w-[98%] my-1 p-1" name="password2" type="password" placeholder="New Password" />
           </div>
          </div>
       </div>
       <div className="mt-3 row mx-2">
        {server_error.errors && <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>Password and Confirm Password don't match.</Typography>}
       {showA && <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between" role="alert">
        <div><strong >Success!!</strong> Password Changed Successfully</div>
        <button type="button" onClick={()=>{
          setShowA(false)
        }} className="close mx-0" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}
       {isLoading?<CircularProgress/>:<button type="submit" className="border ease-in duration-300 p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Update</button>}
          {/* <!-- <button className="border p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Cancle</button> --> */}
       </div>
       </form>

       
      </motion.div>
    )
}