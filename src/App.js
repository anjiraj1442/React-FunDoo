import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import SignUp from "./pages/Registration/SignUp";
import ResetPassword from "./pages/resetpassword/ResetPasswod";
import dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={SignUp} />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/forget" component={ForgotPass} />
          <Route path="/ResetPassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
