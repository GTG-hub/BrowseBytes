import React,{ useState } from 'react'
import { getToken } from "../services/LocalStorageService";
import { useResetPasswordMutation } from "../services/userAuthAPI";
import { CircularProgress, Typography } from "@mui/material";
import { Link, useParams } from 'react-router-dom';


export default function ResetPwd() {
    const [server_error, setServerError] = useState({});
    const [alert, setAlert] = useState(false);
    const [showA, setShowA] = useState(false)
    const {id,token} = useParams()
    console.log(id,token)
//   const { access_token } = getToken()
//   console.log(access_token)
  const [changePw , { isLoading }] = useResetPasswordMutation()
    const handleSubmit=async(e)=>{
        setAlert(true)
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
        "password": data.get('password'),
        "password2": data.get('password2')
        }
        console.log(actualData)
        const res = await changePw({actualData, id,token})
        console.log(res.data)
        if (res.error) {
        //   console.log(typeof (res.error.data.errors))
        console.log(res.error.data)
        setServerError(res.error.data)
        }
        if (res.data) {
        console.log("hello")
        console.log(res.data)
        setShowA(true)
        console.log(showA)
        }
    }
  return (
    <div>
      <div className="row flex flex-col bg-gray-300 shadow-lg hover:shadow-xl rounded-lg p-4">
            {/* <div className="flex flex-col items-end text-xl" onClick={()=>setCreate(false)}><MdFolderDelete/></div> */}
            <div className="w-full text-center font-semibold italic ">Reset Password</div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="password" className="text-sm italic font-bold mx-1">New Password</label>
                <input name="password" placeholder="password" className="border rounded-md w-full mx-1 h-[30px] my-3 p-2"/>
                <label htmlFor="password2" className="text-sm italic font-bold mx-1">Confirm Password</label>
                <input name="password2" placeholder="password" className="border rounded-md w-full mx-1 h-[30px] my-3 p-2"/>
                
                <div className="mt-3 row mx-2">
                    {/* {server_error.errors && <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>Password and Confirm Password don't match.</Typography>} */}
                    {showA && <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between" role="alert">
                    <div><strong >Success!!</strong> Password Changed Successfully</div>
                    <button type="button" onClick={()=>{
                    setShowA(false)
                    }} className="close mx-0" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>}
                    {isLoading?<CircularProgress/>:<button type="submit" className="w-[100%] bg-black text-white h-[30px] hover:shadow-2xl rounded-md mx-1 my-2 shadow-lg" >Create</button>}
                    {alert && <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between" role="alert">
                      <div><strong >Success!!</strong> Password Reset Successfully.<Link to="/Signin">Click here</Link></div>
                      <button type="button" onClick={()=>{
                        setAlert(false)
                      }} className="close mx-0" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>}

                    {/* <!-- <button className="border p-2 w-[100px] rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Cancle</button> --> */}
                </div>
            </form>
                      </div>
    </div>
  )
}
