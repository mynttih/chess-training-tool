import BoardComponent from './components/BoardComponent'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">Sidebar</div>
          <div className="col-md-10"><BoardComponent /></div>
        </div>
      </div>
    );
  }
}

export default App;
