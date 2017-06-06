import React from 'react';

import DevTools from 'mobx-react-devtools';

import {Route} from 'react-router-dom';
import Home from './Home';

const App = () => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <header>
      <h1>Hello</h1>
    </header>

    <section>
      <Route
        exact path='/'
        component={Home}
      />
    </section>

  </section>

);

export default App;
