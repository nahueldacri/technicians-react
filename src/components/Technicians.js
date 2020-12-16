import React, { Component } from 'react';
import TechniciansItem from './TechniciansItem';
import PropTypes from 'prop-types';
import AddTechnicians from './AddTechnicians';

class Technicians extends Component {
  render(){
    return this.props.technicians.map((technician)=> (
        <TechniciansItem key={technician.id} technician={technician} DelTech={this.props.DelTech} />
    ));
  }
}

// PropTypes
Technicians.propTypes = {
  technicians: PropTypes.array.isRequired,
  DelTech: PropTypes.func.isRequired,
}

export default Technicians;