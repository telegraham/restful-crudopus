import React, { Component } from 'react';
import RestfulRoute from './RestfulRoute'
import './App.css';

class App extends Component {

  render() {
    return (
      <ol className="routes">
        <RestfulRoute name="Index" verb="GET" path="/dogs" />
        <RestfulRoute name="Show" verb="GET" path="/dogs/:id" />
        <RestfulRoute name="New" verb="GET" path="/dogs/new" />
        <RestfulRoute name="Create" verb="POST" path="/dogs" />
        <RestfulRoute name="Edit" verb="GET" path="/dogs/:id/edit" />
        <RestfulRoute name="Update" verb="PUT/PATCH" path="/dogs/:id" />
        <RestfulRoute name="Destroy" verb="DELETE" path="/dogs/:id" />
      </ol>
    );
  }
}

export default App;
