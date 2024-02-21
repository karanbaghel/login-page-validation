
// import './App.css';
import "../src/style/Loginpage.css"
import Homepage from "./component/Homepage";
import Loginpage from "./component/Loginpage";
import  {useHistory} from 'react-router-dom'

// import Loginpage from "./component/Loginpage";
import Reg from "./component/Reg";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
   <>
   {
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
      <Route path="/reg" element={<Reg/>}></Route>
      <Route path="/login" element={<Loginpage/>}></Route>
    </Routes>
    </BrowserRouter>
   }
   {/* <Res/> */}
   {/* <Loginpage/> */}
   </>
  );
}

export default App;
