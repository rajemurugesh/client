import React from 'react';

// import { useNavigate } from 'react-router-dom';

//  const Homepage = () => {
//     const navigate = useNavigate();

//     // HANDLE LOGOUT EVENT
//     const logout = (e) => {
//         e.preventDefault();
//         console.log('Logout');

//         // CLEAR DATA FROM STORAGE
//         localStorage.clear();
//         sessionStorage.clear();

//         navigate("/login");
//     }
//     return ( 
//         <div className="col-md-4 p-5">
//             <h1>Hello Welcome to Homepage</h1>
//             <button onClick={logout} type="submit" className="btn btn-outline-primary w-100">Logout</button>
            
      
//     </div>
//      );
//  }
 
//  export default Homepage;


const Homepage = ({setLoginUser}) => {
    return (
        <div className="col-md-4 p-5">
            <h1 className="text-center">Hello Homepage</h1>
            <button type="submit" className="btn btn-outline-primary w-100" onClick={() => setLoginUser({})} >Logout</button>
        </div>
    )
}

export default Homepage