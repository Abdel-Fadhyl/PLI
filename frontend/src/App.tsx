import React, { useContext } from 'react';
import NavBar from './Comp/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import Homepage from './Pages/Homepage';
import Login from './Pages/sign/Login';
import Profile from './Pages/Profile';
import "./main.css";
import Register from './Pages/sign/Register';
import AdmintestPage from './Pages/AdmintestMaire';
import { myContext } from './Pages/Context';
import Forgotpassword from './Pages/sign/ForgotPassword';
import NavBarUser from './Comp/NavBarUser';
import Users from './Pages/Pages-Problems/Users';
import UsersMairie from './Pages/Pages-Problems/UsersMairie';
import ProblemsOK from './Pages/Pages-Problems/ProblemsOK';
import Problems from './Pages/Pages-Problems/Problems';
import AllProblems from './Pages/Pages-Problems/AllProblems';

function App() {
  const ctx = useContext(myContext);
  
  return (
    <BrowserRouter>
    <NavBar />
    <NavBarUser />
      <Switch>
        { 
          ctx ? (
            <>
              {ctx.isAdmin ? <Route path='/admin' component={AdminPage}></Route> : null}
              <Route path='/login' component={Login}></Route>
              <Route path='/adminmaire' component={AdmintestPage}></Route>
              <Route path='/profile' component={Profile}></Route>
              <Route path='/register' component={Register}></Route>
              <Route path='/forgotpassword' component={Forgotpassword}></Route>
              <Route path='/Users' component={Users}></Route>
              <Route path='/Users+Mairie+City' component={UsersMairie}></Route>
              <Route path='/ProblemsOK' component={ProblemsOK}></Route>
              <Route path='/Problems+to+be+resolved' component={Problems}></Route>
              <Route path='/allProblemes' component={AllProblems}></Route>
            </>
          ) : (
            <>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
            </>
          )
        }
    </Switch> 
    </BrowserRouter>
  );
}
export default App;
