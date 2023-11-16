import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "./Historytab";
import { motion } from "framer-motion";

export const ActiveHistory = () => {
  return (
    <motion.div
      className=" col-sm-8 flex flex-col h-[100vh] overflow-scroll"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
      id="history_right"
    >
      <div className="row my-2 font-bold text-3xl text-white">
        <h1>History</h1>
      </div>
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
    </motion.div>
  );
};
