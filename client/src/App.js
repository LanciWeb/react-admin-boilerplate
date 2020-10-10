import React from 'react';
import { Admin, Resource } from 'react-admin';
import PostList from './components/PostList';
import PostEdit from './components/PostEdit';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import restProvider from 'ra-data-simple-rest';
import PostCreate from './components/PostCreate';
import UserCreate from './components/UserCreate';

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
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
