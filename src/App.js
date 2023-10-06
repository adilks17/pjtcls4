// import Transferdata from "./Components/Transferdata";
// import Login from "./Components/Login";
// import Course from "./Components/Course/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Logindata from "./Components/Logindata";
import Course from "./Components/Course/Course";
function App() {
  return (
    <div>
      {/* <Transferdata username="abc" password="xyz" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
     
     <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Ldata'} element={<Logindata/>}></Route>
          <Route path={'/Course'} element={<Course />}></Route>
 
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
