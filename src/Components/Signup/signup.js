// import React, { Component } from 'react';
// import axios from "axios";
// import { Link } from 'react-router-dom';

// class Signup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             email: "",
//             phoneNumber: "",
//             password: "",
//         };
//     }

//     handleChange = (e) => {
//         //console.log(e.target.name);
//         //console.log(e.target.value);
//         this.setState({ [e.target.name]: e.target.value });
//       };

//       handleSubmit = async(e) => {
//         e.preventDefault();
    
//         if (
//           (this.state.name !== "" && this.state.email !== "" && this.state.phoneNumber !== "" &&
//           this.state.password !== "")
//         ) {
//           await axios
//             .post("http://localhost:3005/signup", this.state)
    
//             .then((res) => {
//               this.setState({ name: "", email: "", phoneNumber: "",password: "" });
    
//               console.log(res);
//             });
//         }
//       };

//     render() {
//         return (
//             <>
//         <div className="col-md-4 p-5">
//         <h1 className="text-center">Register</h1>

//         <form onSubmit={(e) => this.handleSubmit(e)}>
//           <div className="mb-3">
//             <label className="form-label">User Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={this.state.name}
//               onChange={(e) => this.handleChange(e)}
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email Id</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               placeholder="Enter your email id"
//               onChange={(e) => this.handleChange(e)}
//               value={this.state.email}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Phone Number</label>
//             <input
//               type="number"
//               className="form-control"
//               name="phoneNumber"
//               placeholder="Enter your phone number"
//               onChange={(e) => this.handleChange(e)}
//               value={this.state.phoneNumber}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="text"
//               className="form-control"
//               name="password"
//               placeholder="Enter your phone number"
//               onChange={(e) => this.handleChange(e)}
//               value={this.state.password}
//             />
//           </div>

//           {/* <div className="mb-3">
//             <label className="form-label">Re-enterPassword</label>
//             <input
//               type="text"
//               className="form-control"
//               name="reEnterPassword"
//               placeholder="Enter your phone number"
//               onChange={(e) => this.handleChange(e)}
//               value={user.reEnterPassword}
//             />
//           </div> */}
//           <button type="submit" className="btn btn-outline-primary w-100">
//             register
//           </button>
//         </form>

//         <div>
//           <h4 className='text-center'>or</h4>
//         </div>
//         <Link to="/login">
//           <button type="submit" className="btn btn-outline-primary w-100">Login</button>
//         </Link>
//         <div>
//           <p className="link">
//             Already registered? &ensp;
//             <a href="/login">Login</a>
//           </p>
//         </div>
//       </div>
//     </>
//         );
//     }
// }

// export default Signup;




