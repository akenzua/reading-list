import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

const App = () => (
  <div>
    <Route path="/books/:id?" component={Main}/>
  </div>
);

export default App;