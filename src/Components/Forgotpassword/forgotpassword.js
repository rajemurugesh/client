import React, {useState} from 'react';
import axios from "axios"
import { useNavigate , Link} from "react-router-dom";

const Forgotpassword = () => {

  const Navigate = useNavigate()

  const [user,setForgetUser]= useState({
    email:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
  setForgetUser({
    ...user,
    [name]:value
  })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3005/forgotpassword", user)
    .then (res=>  {
       alert(res.data.message)
       console.log(res)
    //    setForgetUser(res.data.user)
    Navigate("/resetpassword");
  
  })
}


    return ( 
        <div className="col-md-4 p-5">
            <h1 className="text-center">Forgetpassword</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  
                  <label className="form-label">Email id</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>

                <button onClick= {handleSubmit} type="submit" className="btn btn-outline-primary w-100">
                  Send Mail
                </button>
                </form>

                <div>
                 <p className="Back to Login">
                  <Link to={'/login'}>Back to Login</Link>
                </p> 
                </div>
        </div>
        
     );
}

export default Forgotpassword;