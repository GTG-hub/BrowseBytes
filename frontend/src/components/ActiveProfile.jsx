import React from "react";
import {motion} from "framer-motion"
import { getProfileInfo, setProfileInfo } from "../services/LocalStorageService";


export const ActiveProfile = (props) => {
  var {des,phoneNumber,bio} = getProfileInfo();
  console.log(des,phoneNumber,bio)
  if(!des){
    des = "Student"
  }
  if(!phoneNumber){
    phoneNumber="+91 XXXXXXXXXXX"
  }
  if(!bio){
    des = "As a student, I am actively involved in the pursuit of knowledge and personal development. I engage in formal learning within an educational setting, where I attend classes, participate in discussions, and diligently study various subjects. My primary goal is to acquire a well-rounded education, encompassing both theoretical understanding and practical skills. I am dedicated to the continuous process of learning, growing, and honing my abilities to prepare for future endeavors. As a member of the student community, I contribute to a collaborative learning environment, fostering interaction with peers and educators."
  }
  setProfileInfo({des,phoneNumber,bio})
  

  // const handleSubmit = (e) => {
    
  //   const data = new FormData()
  //   var des = data.get("des")
  //   var phoneNumber = data.get("phoneNumber")
  //   var bio = data.get("bio")
  //   console.log(des,phoneNumber,bio)
  //   setProfileInfo({des,phoneNumber,bio})
  //   console.log(des,phoneNumber,bio)

  // }
  phoneNumber="+91 XXXXXXXXXXX"
  des = "Student"
  
  

    return (
      <motion.div
      className=" col-sm-8 flex flex-col h-[100vh] w-[100vw]"
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
                      Name
                    </div>
                    <div>
                      <input className="border w-[98%] my-1 p-1" type="text" placeholder={props.name} readOnly={true} />
                    </div>
                 </div>
                 
              </div>
              <div className="row">
                <div className="col flex flex-col">
                   <div className="label my-1 text-sm sm:text-base">
                     Email
                   </div>
                   <div>
                     <input className="border w-[98%] my-1 p-1" type="email" placeholder={props.email} readOnly={true} />
                   </div>
                </div>
             </div>
           <div className="row">
            <div className="col flex flex-col">
               <div className="label my-1 text-sm sm:text-base">
                 Designation
               </div>
               <div>
                 <input className="border w-[98%] my-1 p-1 text-gray-400" vlaue={des} type="text" placeholder={des} name="des" />
               </div>
            </div>
            <div className="col">
             <div className="label my-1 text-sm sm:text-base">
               Phone Number 
             </div>
             <div>
               <input className="border w-[98%] my-1 p-1" type="text" readOnly={false} placeholder={phoneNumber} />
             </div>
            </div>
         </div>
         <div className="row className flex-col">
          <div className="biolabel text-sm sm:text-base">
            Bio
          </div>
          <div>
            <textarea name="bio" className="border p-2  w-[100%] h-[200px] text-gray-400">As a student, I am actively involved in the pursuit of knowledge and personal development. I engage in formal learning within an educational setting, where I attend classes, participate in discussions, and diligently study various subjects. My primary goal is to acquire a well-rounded education, encompassing both theoretical understanding and practical skills. I am dedicated to the continuous process of learning, growing, and honing my abilities to prepare for future endeavors. As a member of the student community, I contribute to a collaborative learning environment, fostering interaction with peers and educators.</textarea>
          </div>
       </div>
       {/* <button type="submit" className="border ease-in duration-300 p-2 w-full rounded-lg bg-slate-100 hover:text-white hover:bg-[#0d6efd] shadow-md hover:shadow-xl mx-1">Update</button> */}
          </form>
      </motion.div>
    )
}