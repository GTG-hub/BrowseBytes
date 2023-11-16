import React from "react";
import { Link } from "react-router-dom";

export const Tab = () => {
  return (
    <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
      <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
        <div className="col-6">
          <div className="text-sm sm:text-base text-white">Article name</div>
        </div>
        <div className="col-6">
          <div className="float-right flex flex-row">
            <div className="mx-1 my-auto text-sm sm:text-base text-white">
              timestamp
            </div>{" "}
            <i className="fa-regular fa-bookmark my-auto"></i>
          </div>
        </div>
      </div>
      <div className="row mx-2 text-sm">
        {/* <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> --> */}
        {/* <a className="text-primary" href="#">Here goes the link</a> */}
        <Link className="text-primary" to={"/"}>
          Here goes the link
        </Link>
      </div>
      <div className="row my-1 mx-2 text-sm text-white">
        <div className="truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          numquam placeat facere? Ipsam quam, quisquam rerum dolores illo
          quaerat in atque inventore ratione, quasi at cupiditate hic animi
          officiis fuga.
        </div>
      </div>
    </div>
  );
};
