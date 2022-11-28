
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Homepage from "./Components/Homepage/homepage";
import Navbar from "./Components/Navbar/navbar";
import Forgotpassword from "./Components/Forgotpassword/forgotpassword";
import Resetpassword from "./Components/Resetpassword/resetpassword";
import { useState } from "react";


const App = () => {
  const [user, setLoginUser] = useState({})
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
        {/* <Route element={<PrivateRoutes />} /> */}

          <Route exact path="/" element={
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          } />



          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />



          <Route path="/register" element={<Register />} />

          <Route path="/forgotpassword" element={<Forgotpassword />} />  

          <Route path="/resetpassword/:token" element={<Resetpassword />} />

          {/* <Route path="/users/:id/verify/:token" element={<Emailverify />} /> */}

        </Routes>

      </div>
    </>
  );
}

export default App;


