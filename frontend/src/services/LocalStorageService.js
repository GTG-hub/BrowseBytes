const storeToken = (value) => {
    if (value) {
      // console.log("Store Token")
      const { token , email } = value
      const { access, refresh } = token
      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)
      localStorage.setItem('email', email)
    }
  }
  
  const getToken = () => {
    let access_token = localStorage.getItem('access_token') 
    let refresh_token = localStorage.getItem('refresh_token')
    let email = localStorage.getItem('email')
    return { access_token, refresh_token, email }
  }
  
  const removeToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('email')
  }
  

  const setStoreArticle = (value) => {
    localStorage.setItem("articles",JSON.stringify(value))
  }

  const getStoreArticle =()=>{
    let articles = JSON.parse(localStorage.getItem("articles"))
    return { articles }
  }

  const setProfileInfo = ({des,phoneNumber,bio}) => {
    localStorage.setItem("designation",des)
    localStorage.setItem("phoneNumber",phoneNumber)
    localStorage.setItem("bio",bio)
  }

  const getProfileInfo = () =>{
    let des = localStorage.getItem("designation") || "student";
    let phoneNumber = localStorage.getItem("phoneNumber") || "+91 XXXXX XXXXX";
    let bio = localStorage.getItem("bio") || "As a student, I am actively involved in the pursuit of knowledge and personal development. I engage in formal learning within an educational setting, where I attend classes, participate in discussions, and diligently study various subjects. My primary goal is to acquire a well-rounded education, encompassing both theoretical understanding and practical skills. I am dedicated to the continuous process of learning, growing, and honing my abilities to prepare for future endeavors. As a member of the student community, I contribute to a collaborative learning environment, fostering interaction with peers and educators."
    return {des,phoneNumber,bio}
  }

  const setShow = (value) => {
    localStorage.setItem("show",value);
  }

  const getShow = () =>{
    const show = localStorage.getItem("show") || 0;
    return {show};
  }


  
  export { storeToken, getToken, removeToken , setStoreArticle, getStoreArticle , setProfileInfo, getProfileInfo , setShow , getShow}