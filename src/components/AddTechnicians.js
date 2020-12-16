import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTechnicians extends Component {
    state= {
        name: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTechnicians(this.state.name);
        this.setState({name: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}} >
                <input 
                    type="text"
                    name="name"
                    style={{flex: '10', paddingLeft: '20px', margin: '4px'}}
                    placeholder="Add technician name..."
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Add"
                    className="btnAdd"
                    style={{flex: '1', paddingLeft: '20px', margin: '4px'}}
                />
            </form>
        )
    }
}

// PropTypes
AddTechnicians.propTypes = {
    AddTechnicians: PropTypes.func.isRequired,
  }

export default AddTechnicians