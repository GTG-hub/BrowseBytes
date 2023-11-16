import React from "react";
import {FaThumbsUp,FaThumbsDown,FaBookmark,FaComment} from "react-icons/fa"
import 'animate.css'

export const Result = () => {
    return (
        <div className="wow animate__animated animate__slideInUp my-4 mx-[10%]">
            <div className="flex flex-col p-3 border rounded-lg shadow-md hover:shadow-lg">
                <div className="title text-3xl">
                    Title
                </div>
                <div className="description text-sm truncate">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum earum, nobis quo quisquam voluptas, eveniet cum aliquam eum illo odio dolorum! Commodi impedit et eligendi obcaecati perspiciatis cupiditate dolorum corporis?
                </div>
                <div className="aurthor text-xs">
                        #author
                </div>
                <hr/>
                <div className="flex flex-row ">
                    <div className="mx-1 flex flex-row">
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
                    </div>
                    <div className="mx-1 flex flex-row">
                        <div className="mx-1 my-auto">
                            <FaBookmark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}