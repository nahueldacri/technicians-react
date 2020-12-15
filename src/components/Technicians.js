import React, { Component } from 'react';
import TechniciansItem from './TechniciansItem';
import PropTypes from 'prop-types';

class Technicians extends Component {
  render(){
    console.log(this.props.technicians)
    return this.props.technicians.map((technician)=> (
        <TechniciansItem key={technician.id} technician={technician} DeleteTechnicians={this.props.DeleteTechnicians}/>
    ));
  }
}

// PropTypes
Technicians.propTypes = {
  technicians: PropTypes.array.isRequired
}

export default Technicians;