import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';

function App() {
  return (
    // ! localhost:3000, NOT 5000 because I added a proxy
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    </Admin>
  );
}

export default App;
