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
// Delete technicians
  DelTech = (id) => {
    this.setState({ technicians: [...this.state.technicians.filter(technician => technician.id !== id)]});
  }

  render(){
    return (
      <div className='App'>
        <Technicians technicians={this.state.technicians} DelTech={this.DelTech}/>
      </div>
    );
  }
}

export default App;
