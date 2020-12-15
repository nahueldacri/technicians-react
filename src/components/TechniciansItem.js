import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Technicians from './Technicians';

export class TechniciansItem extends Component {
    render(){
        const {id, name} = this.props.technician;
        return (
            <div style={{ paddingLeft: '20px', margin: '4px', backgroundColor: '#999', border: '1px #000 solid'}}>
                <p>
                    {this.props.technician.name}
                    <button onClick={this.props.DeleteTechnician.bind(this, id)} style={{ float: 'right', backgroundColor: '#ff0000', color: '#000', border: 'none', borderRadius: '45%', padding: '3px 5px', marginRight: '4px'}}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TechniciansItem.propTypes = {
    technician: PropTypes.object.isRequired
}

export default TechniciansItem;