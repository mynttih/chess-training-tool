import React, { Component } from 'react';

class SidebarComponent extends Component {
  render () {
    return (
      <div>
        <button className="btn btn-primary">Add game</button>
        <button className="btn btn-primary">Practice</button>
      </div>
    );
  }
}

export default SidebarComponent;