import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";

import AddUser from './containers/Form/AddUser'
import EditUser from "./containers/Form/EditUser";

function App() {
   return (
      <>
         <Switch>
            <Route path="/editUser" component={EditUser} />
            <Route path='/addUser' component={AddUser}/>
            <Route path="/" component={Dashboard} />
         </Switch>
      </>
   );
}

export default withRouter(App);
