import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Technicians from './Technicians';

export class TechniciansItem extends Component {

    render(){
        const {id, name} = this.props.technician;
        return (
            <div style={{ paddingLeft: '20px', margin: '4px', backgroundColor: '#999', border: '1px #000 solid'}}>
                <p>
                    {name}
                    <button onClick={this.props.DelTech.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TechniciansItem.propTypes = {
    technician: PropTypes.object.isRequired
}

const btnStyle = {
    float: 'right', 
    backgroundColor: '#ff0000', 
    color: '#000', 
    border: 'none', 
    borderRadius: '45%', 
    padding: '3px 5px', 
    marginRight: '4px'
}

export default TechniciansItem;