import React from 'react'
import {List, Datagrid, DateField, TextField, EditButton, DeleteButton} from 'react-admin';


const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <EditButton basePath='/posts' />
        <DateField source='publishedAt' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList
