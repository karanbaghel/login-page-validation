import axios from "axios";
import React, { useState } from "react";

const Reg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [dob, setDob] = useState("");
  const [address, setaddress] = useState("");
  const [password, setPassword] = useState("");

  async function datasubmit() {
    try {
      const resp = await axios.post("http://localhost:9000/register", {
        name,
        email,
        phoneno,
        dob,
        address,
        password
      });

      if (resp.status === 201) {
        console.log("Data submitted successfully by the post method");
        setName("");
        setEmail("");
        setPhoneno("");
        setDob("");
        setaddress("");
        setPassword("")
      } else {
        console.log("Post data not submitted");
      }
    } catch (error) {
      if (error.response) {
        // The server responded with a status other than 2xx
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Network Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  }

  return (
    <>
      <div className="main_container">
        <div className="container">
          <div className="loginpage_box">
            <div className="box2">
              <div className="inputfeild">
                <label htmlFor="name">Name</label>
                <input
                  className="feild2"
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div className="inputfeild">
                <label htmlFor="email">Email</label>
                <input
                  className="feild2"
                  placeholder="Enter your email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="inputfeild">
                <label htmlFor="phoneno">Phone No</label>
                <input
                  className="feild2"
                  placeholder="Enter your phone no"
                  type="tel"
                  maxLength={10}
                  value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                ></input>
              </div>

              <div className="inputfeild">
                <label htmlFor="dob">DOB</label>
                <input
                  className="feild2"
                  placeholder="Enter your date of birth"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                ></input>
              </div>

              <div className="inputfeild">
                <label htmlFor="address">Address</label>
                <input
                  className="feild2"
                  placeholder="Enter your address"
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                ></input>
              </div>

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

export default Reg;
