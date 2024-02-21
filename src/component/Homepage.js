import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const userdata = await axios
        .get("http://localhost:9000/reg")
        setData(userdata.data)
        console.log(userdata.data)
        // .catch((e) => {
        //   console.log("api is not working", e);
        // });
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table border={"10px"}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Last Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone No</th>
            <th style={tableHeaderStyle}>Age</th>
            <th style={tableHeaderStyle}>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((getdata, getindex) => (
            <tr key={getindex}>
              <td style={tableCellStyle}>{getdata.name}</td>
              <td style={tableCellStyle}>{getdata.lastname}</td>
              <td style={tableCellStyle}>{getdata.email}</td>
              <td style={tableCellStyle}>{getdata.phoneno}</td>
              <td style={tableCellStyle}>{getdata.age}</td>
              <td style={tableCellStyle}>{getdata.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  border: "1px solid black",
  padding: "8px",
  backgroundColor: "#f2f2f2",
};

const tableCellStyle = {
  border: "1px solid black",
  padding: "8px",
};

export default Homepage;
