import axios from "axios";
import React, { useState } from "react";



const Loginpage = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  

  async function datasubmit() {
   

    try {
      const responsedata = await axios.post("http://localhost:9000/login", {
        email,
        password,
        // confirmpassword,

      
      });

      if (responsedata.status === 200) {
        console.log("Login sucessfully");
        setEmail("");
        setPassword("");
        
        window.location.href = "https://w0.peakpx.com/wallpaper/849/1012/HD-wallpaper-super-saiyan-3-dbz-goku-ss3.jpg";
      } else {
        console.log("Post data not submitted");
      }
    } catch (error) {
      console.error("Error while submitting the data", error);
    }
  }

  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="loginpage_box">
            <div className="box1">
              <div className="loginheadline">
                <p>Login</p>
              </div>
            </div>
            <div className="box2">
              <div className="inputfeild">
                <label htmlFor="email">email</label>
                <input
                  className="feild2"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="inputfeild">
                <label htmlFor="password">Password</label>
                <input
                  className="feild2"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              {/* <div className="inputfeild">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  className="feild2"
                  placeholder="Confirm your password"
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div> */}

              <button onClick={datasubmit} className="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
