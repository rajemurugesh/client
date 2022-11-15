import React, { useState }from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Resetpassword = (token) => {

    const Navigate = useNavigate()
    
    const handleSubmit=(e)=>{
      e.preventDefault();

        axios.post('http://localhost:3005/resetpassword', user)
        .then (res=>  {
           alert(res.data.message)
        //    setResetUser(res.data.user)
        Navigate.push("/login");
      
      })
    }
    const [user,setResetUser]=useState({
      token: token,   
        password:""
      })
      
      const handleChange=(e)=>{
        const {name,value}=e.target
      setResetUser({
        ...user,
        [name]:value
      })
      }
      
  
return (
    <div className="col-md-4 p-5">

<h1 className="text-center">Resetpassword</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">
                  Submit
                </button>
                </form>
    </div>
)
 }

 export default Resetpassword;