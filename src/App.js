import "./App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import SignUp from "./pages/Registration/SignUp";
import ResetPassword from "./pages/resetpassword/ResetPasswod";
import Dashboard from "./pages/dashboard/Dashboard";
import Archive from "./pages/Archive/Archive";
import Deleted from "./pages/Deleted/Deleted";
import Notes from "./pages/notes/Notes";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/login" element={<Login />}  />
            <Route path="/register" element={<SignUp />} />

            <Route path="/forget" element={<ForgotPass />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />

            <Route path="/" element={<Dashboard />}>
              <Route exact path="/archive" element={<Archive />} />
              <Route exact path="/trash" element={<Deleted />} />
            </Route>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
