
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../container/Home'

export class App extends React.Component<{}, {}> {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

