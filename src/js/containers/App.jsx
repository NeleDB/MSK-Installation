import React from 'react';

import DevTools from 'mobx-react-devtools';

import {Route} from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Votes from './Votes';

const App = () => (

  <section>

    {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

    <section>
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        exact path='/questions'
        component={Questions}
      />
      <Route
        exact path='/vote'
        component={Votes}
      />
    </section>

  </section>

);

export default App;
