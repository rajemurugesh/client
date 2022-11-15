import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"



const Login = ({ setLoginUser}) => {

  const Navigate = useNavigate();

    const [user, setUser] = useState({email: "", password: "" })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit =  async(e) => {
        e.preventDefault();
    
        console.log("working");
    
        const { email, password } = user;
    
        console.log(email);
        console.log(password);
    
        
        await axios.post("http://localhost:3005/login", user)
    // console.log(user)
            .then(res => {
                alert(res.data.message)
                console.log(res)
                setLoginUser(res.data.user)
                localStorage.setItem("auth", JSON.stringify(res));
                Navigate("/")
               
            })
    }

    return (

        <div className="col-md-4 p-5">
              <h1 className="text-center">Login</h1>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>
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

                <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>

  <p className="forgetpassword text-right">
            {/* <a href="/forgetpassword">Forget Password</a><br/>  */}
            <Link to={'/forgetpassword'}>Forgetpassword</Link>
            </p>

                <button type="submit" className="btn btn-outline-primary w-100">
                  Login
                </button>
                
                </form>

                <div className="mb-3"> 
                <h4 className="text-center">or</h4>
                </div>

              <Link to="/register">
          <button type="submit" className="btn btn-outline-primary w-100">Register</button>
        </Link>

              {/* <div><button onClick={handleSubmit} type='button' className="btn btn-outline-primary w-100">Sign Up</button></div> */}
              {/* <button type="submit" className="btn btn-outline-primary w-100" onClick={() => Navigate.push("/register")}>Signup</button> */}
            </div>
    );
}

export default Login;