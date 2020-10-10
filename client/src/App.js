import React from 'react';
import { Admin, Resource } from 'react-admin';
import PostList from './components/PostList';
import PostEdit from './components/PostEdit';
import restProvider from 'ra-data-simple-rest';
import PostCreate from './components/PostCreate';

function App() {
  return (
    // ! localhost:3000, NOT 5000 because I added a proxy
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
    </Admin>
  );
}

export default App;
