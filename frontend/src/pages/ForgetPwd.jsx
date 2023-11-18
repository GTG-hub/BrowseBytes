import React, { useState } from 'react'
import { useSendPasswordResetEmailMutation } from '../services/userAuthAPI';

export default function ForgetPwd() {
    const [sendPasswordResetEmail,{isLoading}] = useSendPasswordResetEmailMutation() 
    const [alert, setAlert] = useState(false)
    const handleSubmit =async (e) =>{
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const user = {
            email: data.get("email")
        }
        console.log(user)
        const res = await sendPasswordResetEmail(user)
        console.log(res)
        if(res.error){
            console.log(res.error.data)
        }
        if(res.data){
            console.log(res.data)
            setAlert(true)
        }
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='h-[100vh] flex flex-col justify-center items-center'>
        <div class="form-group">
            <label htmlFor="email">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        {alert && <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between" role="alert">
        <div><strong >Success!!</strong> Password Reset Mail Sent Successfully. Please check your mail</div>
        <button type="button" onClick={()=>{
          setAlert(false)
        }} className="close mx-0" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
