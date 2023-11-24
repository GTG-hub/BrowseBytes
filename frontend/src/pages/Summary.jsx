import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./summary.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar1";
import Highlighter from "react-highlight-words";
function Summary() {
  const [query,setQuery] = useState('');
  const {id} = useParams();
  const [article,setArticle] = useState({})
  const baseURL = `http://127.0.0.1:8000/api/user/article/${id}/`;
  const getArticle = async() =>{
    try{
      const response = await axios.get(baseURL)
      console.log(response);
      setArticle(response.data);
      console.log(response.data)
  }catch(error){
      console.log(error)
  }
  }
  useEffect(()=>{
    getArticle()
  },[id])

  const searchQuery = "dog";

  return (
    <div className={styles.myclass2}>
      <Navbar/>
      <form  className={styles.myForm}>
        <input type="text" value ={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder="Search here for keywords" />
      </form>
      <h1>SUMMARY</h1>
      <div className={`${styles.container2} flex flex-col `} id="highlightedText"
      >
        <h1>{article.title}</h1>
        <Highlighter
          textToHighlight={article.summary}
          searchWords={[query]}
          autoEscape={true}
        />
         
       
        <a href={article.Link_article} target="_blank" className="font-bold text-blue">{article.Link_article}</a>
      </div>

    </div>
  );
}
export default Summary;