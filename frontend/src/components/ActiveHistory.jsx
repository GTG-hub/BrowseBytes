import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "./Historytab";
import { motion } from "framer-motion";
export const ActiveHistory = (props) =>{
  const article = []
  console.log(props.articles)
  for (var key in props.articles){
      article.push(props.articles[key])
  }
  // console.log(article[0].article_info.title)
    return(

      
      <motion.div
      className=" col-sm-8 flex flex-col"
      initial={{x:"100%"}}
      animate = {{x:"0%"}}
      transition = {{
          ease:"linear",
          duration: 0.5,
        }}
      id="history_right"
  >
        <div className="row my-2 font-bold text-3xl">
          <h1>History</h1>
        </div>
        {/* <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
            
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div>

        <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
             <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div>

        <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
            <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> -->
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div>

        <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
            <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> -->
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div>
        <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-sm-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
            <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> -->
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div>
        <div className="row my-2 mx-1 border rounded-lg h-[100px] w-full shadow-lg">
          <div className="row mt-2 mb-1 mx-2 font-bold flex flex-row ">
             <div className="col-6">
              <div className="text-sm sm:text-base">Article name</div>
             </div>
             <div className="col-6">
              <div className="float-right flex flex-row"><div className="mx-1 my-auto text-sm sm:text-base">timestamp</div> <i className="fa-regular fa-bookmark my-auto"></i></div>
             </div>
          </div>
          <div className="row mx-2 text-sm">
            <!-- <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div> -->
            <a className="text-primary" href="#">Here goes the link</a>
            <Link className="text-primary" to={'/'}>Here goes the link</Link>
          </div>
          <div className="row my-1 mx-2 text-sm">
            <div className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt numquam placeat facere? Ipsam quam, quisquam rerum dolores illo quaerat in atque inventore ratione, quasi at cupiditate hic animi officiis fuga.</div>
          </div>
        </div> */}
        {/* {props.articles.map((article,key)=>{
          console.log(key.article_info.title)
          (<Tab title = {key.article_info.title} />)
      })} */}
      
       
      {
        article.map((value,key)=>( 
          <Tab title={value.article_info.title} link={value.article_info.Link_article} desc={value.article_info.summary} interaction={value.article_interaction_status} />
        ))
      }
      {
        !article.length && <Tab title={"Save an article to show it here"} link={"link"} interaction={"saved"} desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet veritatis repellat temporibus earum minus doloribus culpa optio doloremque! Cupiditate labore nulla odio fuga libero suscipit impedit quaerat aliquid optio iusto!"}/>
      }
        
      </motion.div>

    )
}