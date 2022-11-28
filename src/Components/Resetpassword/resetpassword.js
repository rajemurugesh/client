 import React, { useState } from "react";
import {useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Resetpassword = () => {

  const [password,setPassword] = useState("")
  // const [passwordConfirm, setPasswordConfirm] = useState("")

    const Navigate = useNavigate()
    const {token} = useParams()
    console.log(token);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch('http://localhost:3005/resetpassword', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             token: props.token,
//             password

//         })
//     });
// };

const handleSubmit=(e)=> {
  e.preventDefault();
  
    axios.post('http://localhost:3005/resetpassword', password)
    .then (res=>  {
       alert(res.data.message)
       setPassword(res.data.user)
    localStorage.setItem("auth", JSON.stringify(res));
    Navigate("/login");

  })
}


// const handleChange=(e)=>{
//   const {name,value}=e.target
// setResetUser({
//   ...user,
//   [name]:value
// })
// }


return (
    <div className="col-md-4 p-5">

<h1 className="text-center">Resetpassword</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="new-password"
                    className="form-control"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                {/* <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                  />
                </div> */}

                <button type="submit" className="btn btn-outline-primary w-100">
                  Submit
                </button>
                </form>
    </div>
)
 }

 export default Resetpassword; 



// import React, { Component } from 'react';
// import axios from 'axios';
// // import { Navigate} from 'react-router-dom';

// class Resetpassword extends Component {
//   state = {}

//   handleSubmit = e => {
//     e.preventDefault();

//     // const {token} = useParams();
//     // console.log(token)
//     const data = {
//       token: this.token,
//             password: this.password,
//             password_confirm: this.password_confirm
//     }
  
//     axios.post('http://localhost:3005/resetpassword', data).then(
//       res=>{
//         console.log(res);
//         this.setState({
//           Resetpassword: true
//         })
//       }
//     ).catch(
//       err=>{
//         this.setState({
//           message: err.response.data.message
//         })
//       }
//     )
//   };

//   render() {
//     // if(this.state.resetpassword) {
//     //   return <Navigate to={'/login'} />
//     // }

//     // let error = '' ;

//     // if(this.state.message){
//     //     error = (
//     //         <div className="alert alert-danger" role="alert">
//     //             {this.state.message}
//     //         </div>
//     //     )
//     // }

//     return (
//       <div className="col-md-4 p-5">

//         <h1 className="text-center">Resetpassword</h1>

//         <form onSubmit={this.handleSubmit}>
//         {/* {error} */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               // name="password"
//               onChange={e => this.password = e.target.value}/>
//           </div>

//           <div className="mb-3">
//                   <label className="form-label">Password Confirm</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     // name="password"
//                     onChange={e => this.password_connfirm = e.target.value}/>
//                 </div>
//           <button type="submit" className="btn btn-outline-primary w-100">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Resetpassword;