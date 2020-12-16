import React, { Component } from 'react';
import AddTechnicians from './components/AddTechnicians';
import Technicians from './components/Technicians';
import * as uuid from 'uuid';
import './App.css';
import technician from './mocks/technicians.json';




class App extends Component {
  state = technician;

// Delete technicians
  DelTech = (id) => {
    this.setState({ technicians: [...this.state.technicians.filter(technician => technician.id !== id)]});
  }

// Add technicians
  AddTechnicians = (name) => {
    const newTechnician = {
      id: uuid.v4() ,
      name: name,
      completed: false
    }
    this.setState({ technicians: [...this.state.technicians, newTechnician]});
  }


  render(){
    return (
      <div className='App'>
        <div className='container'>
          <Technicians technicians={this.state.technicians} DelTech={this.DelTech}/>
          <AddTechnicians AddTechnicians={this.AddTechnicians}/>
        </div>
      </div>
    );
  }
}

export default App;
