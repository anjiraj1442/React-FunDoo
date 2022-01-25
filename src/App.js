import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import SignUp from "./pages/Registration/SignUp";
import ResetPassword from "./pages/resetpassword/ResetPasswod";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignUp} exact />
          <Route path="/login" component={Login} />

          <Route path="/ForgotPass" component={ForgotPass} />
          <Route path="/ResetPassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
