import React, { useState } from "react";
import {FaThumbsUp,FaThumbsDown,FaBookmark,FaComment} from "react-icons/fa"
import { usePostArticleMutation } from "../services/userAuthAPI";
import { getToken } from "../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export const Result = (props) => {
    const Navigate = useNavigate()
    const [serverError, setServerError] = useState({})
    const [color,setColor] = useState('text-black')
    const [postArticle , { loading }] = usePostArticleMutation()
    const { access_token, refresh_token , email } = getToken()
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState(false)
    console.log(email)
    const data = {
        Interaction_id : "saved",
        Article_id : props.Article_id,
        User_id : email
    }
    const handleSubmit = async()=>{
        const res = await postArticle(data);
        if(res.error){
            console.log(res.error)
            setServerError(res.error)
            setShow(true)
            
        }
        if(res.data){
            console.log(res.data);
            setAlert(true);
            
            setColor('text-[#0d6efd]')
        }
        setTimeout(() => {
            setShow(false);
          }, 2000);
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }
    
    return (
        <div  className="my-4 mx-[10%] ">
            <div className="flex flex-col p-3 border rounded-lg shadow-md hover:shadow-lg">
                <div className="title text-3xl hover:underline hover:cursor-pointer"  onClick={()=>{
                    // <Navigate to={`summary/${data.Article_id}`}/>
                    console.log("hello")
                    setShow(false)

                    Navigate(`summary/${data.Article_id}`)
                }}>
                    {props.title}
                </div>
                <div className="description text-sm truncate">
                    {props.summary.slice(0,250)}

                    
                </div>
                <div className="aurthor text-xs">
                       <strong>author</strong>  : #{props.author}
                </div>
                <hr/>
                <div className="flex flex-row ">
                    {/* <div className="mx-1 flex flex-row">
                        <div className="mx-1 my-auto">
                            <FaThumbsUp/>
                        </div>
                        <div className="mx-1 my-auto text-xs">
                            Count
                        </div>
                    </div>
                    <div className="mx-1 flex flex-row">
                        <div className="mx-1 my-auto">
                            <FaThumbsDown/>
                        </div>
                        <div className="mx-1 my-auto text-xs">
                            Count
                        </div>
                    </div>
                    <div className="mx-1 flex flex-row">
                        <div className="mx-1 my-auto">
                            <FaComment/>
                        </div>
                        <div className="mx-1 my-auto text-xs">
                            Count
                        </div>
                    </div> */}
                    <div className="mx-1 flex flex-row">
                        <div className="mx-1 my-auto">
                           <button onClick ={handleSubmit} className={`${color}`}> <FaBookmark className="z-1" /></button>
                           {alert &&
                           <div class="alert alert-success alert-dismissible fade show flex flex-row justify-between" role="alert">
                            <div><strong>Success!</strong> Article added to workspace successfully</div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                           }
                           {show?<Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>You need to be a registered user to save the article</Typography>:""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}