import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          <Form></Form>
          {/* END FORM SINH VIÊN */}
        </div>

      </div>
    );
  }
}

export default App;
