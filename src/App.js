import "./App.css";

import Login from "./pages/login/Login";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import SignUp from "./pages/Registration/SignUp";
import ResetPassword from "./pages/resetpassword/ResetPasswod";

function App() {
  return (
    <div className="App">
      <SignUp/>
      {/* <Login /> */}
      {/* <ForgotPass/> */}
      {/* <ResetPassword/> */}
    </div>
  );
}

export default App;
