import React, { Component } from 'react';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import createNavigator from 'routes';

class App extends Component {
  render() {
    const Routes = createNavigator();
    return <Routes />;
  }
}

export default App;
