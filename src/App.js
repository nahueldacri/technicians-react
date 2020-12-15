import React, { Component } from 'react';
import AddTechnicians from './components/AddTechnicians';
import DeleteTechnicians from './components/DeleteTechnicians';
import Technicians from './components/Technicians';


class App extends Component {
  state = {
    technicians: [
    {
      id: 1,
      name: 'George',
      completed: false
    },
    {
      id: 2,
      name: 'John',
      completed: false
    },
    {
      id: 3,
      name: 'Brad',
      completed: false
    }
  ]
}
// Delete Technician
DeleteTechnicians = (id) => {
  console.log(id)
}

  render(){
    return (
      <div className='App'>
        <Technicians technicians={this.state.technicians} DeleteTechnicians={this.DeleteTechnicians} />
      </div>
    );
  }
}

export default App;
