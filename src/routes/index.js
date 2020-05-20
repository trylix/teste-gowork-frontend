import React from 'react';

import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import Error from '~/pages/Error';

import Employees from '~/pages/Employees';
import Plans from '~/pages/Plans';
import Customers from '~/pages/Customers';
import Offices from '~/pages/Offices';
import Dashboard from '~/pages/Dashboard';

import SignIn from '~/pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>

      <Route path="/dashboard" isPrivate>
        <Dashboard />
      </Route>
      <Route path="/offices" isPrivate>
        <Offices />
      </Route>
      <Route path="/customers" isPrivate>
        <Customers />
      </Route>
      <Route path="/plans" isPrivate>
        <Plans />
      </Route>
      <Route path="/employees/:customerId" isPrivate>
        <Employees />
      </Route>

      <Route path="/">
        <Error />
      </Route>
    </Switch>
  );
}
