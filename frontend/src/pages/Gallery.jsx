import React ,{useState, useEffect}from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "../css/Gallery.css"
const ArrowAnimation = () => {
  const arrowVariants = {
    initial: { y: 0 },
    animate: { y: [0, 10, 0] }, 
  };

  const arrowTransition = {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  };
  return (
    <div className="container flex" style={{position:'absolute', left:'974px', top:'38px'}}>
      <motion.div 
        className="arrow"
        initial="initial"
        animate="animate"
        variants={arrowVariants}
        transition={arrowTransition}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="white" 
          stroke="white" 
          strokeWidth="0.1"
        >
        <path d="M12 22L1 11h6V2h10v9h6z" />
        </svg>
      </motion.div>
      <div className="click-text pl-2 text-white"><br></br>CLICK HERE</div>
    </div>
  );
};


export default function Gallery() {
  const circleVariants = {
    initial: { scale: 1, borderColor: '#8a2be2', backgroundColor: 'transparent'},
    hovered: { scale: 0.8, borderColor: '#8a2be2', backgroundColor: '#8a2be2' },
  };
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  
  // const arrowVariants = {
  //   initial: { y: 0 },
  //   animate: { y: [0, 10, 0] }, 
  // };

  // const arrowTransition = {
  //   duration: 2,
  //   repeat: Infinity,
  //   ease: 'easeInOut',
  // };
  
  const [isClickable, setIsClickable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const []
  // const [scale, setScale] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [])
  const handleClickable = () => {
    setIsClicked(true);
    // setScale(0.18);
  };
  
  const containerVariants = {
    initial: {scale:1,
    paddingLeft:"480px",
    paddingRight:"480px",
    paddingTop:"42px",
    paddingBottom:"42px",
    rotate:0,
    borderRadius:"0px"

 },
    animate: { x:"18%",y:isClicked?"-32%":"-38%", scale:0.20, rotate:90,rounded:10,borderRadius:"50px"},
    transition: { duration: isClicked?1:2,delay:0 }
  };
  return (
    <div>
      <div className=" bg-neutral-950 pt-[350px] pb-[400px] justify-center items-center">
        <div className="flex justify-center items-center">
        
        {showArrow && <ArrowAnimation />}
        
          
    <motion.div  initial="initial" animate="animate" variants={containerVariants} transition={{duration:1,delay:1}} style={{cursor:isClickable? 'pointer':'not-allowed',position:'absolute'}} onClick={isClickable ? handleClickable : null}  className = "bg-[#550CDF] text-[128px] text-white font-bold text-center">
    <motion.div
      initial={{opacity:1,
      }}
      animate={{opacity:0}}
      transition={{delay:1}}
    
      
      className="text-[128px] text-white font-bold"
    > GALLERY</motion.div> 
    </motion.div>
        
    <motion.div initial={{ opacity: 0, x: '100%',y:"-15%" }}
        animate={{ opacity: 1, y: '-15%',x:0 }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#272727] w-[342px] h-[378px] items-center rounded-3xl"></motion.div>
    
    <motion.div initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#DDDDDD] w-[655px] h-[440px] items-center rounded-3xl"></motion.div>
    <motion.div initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#272727] w-[655px] h-[243px]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }} style={{position:'absolute'}} className="bg-[#3E444E] w-[306px] h-[306px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 1 }} style={{position:'absolute'}} className="bg-[#DDDDDD] w-[224px] h-[224px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#272727] w-[172px] h-[172px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#DDDDDD] w-[120px] h-[120px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: isClicked?0:1,scale:isClicked?9:1, x: '-550%',y:'-340%' }}
        transition={{ duration: isClicked?2:1, delay: 1 }} style={{position:'absolute'}} className="bg-[#FFFFFF] w-[50px] h-[50px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, x: '-50%',y:'40%' }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#FFFFFF] w-[40px] h-[40px] rounded-[50%]"></motion.div>
    <motion.div initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, x: '10%',y:'-50%' }}
        transition={{ duration: 1, delay: 1 }} style={{position:'absolute'}} className="bg-[#FFFFFF] w-[20px] h-[20px] rounded-[50%]"></motion.div>
    </div>
    <motion.div className="circle-container" animate={{ display:isClicked?"inline":"none"}} transition={{duration:1}}>
      <motion.div
        className="circle"
        initial="initial"
        whileHover="hovered"
        variants={circleVariants}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>
    </motion.div>
     </div>
     
    </div>
    

    

  )
}
