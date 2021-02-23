/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={(props) => (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
