import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
    };

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <input
                    type='number'
                    name='age'
                    placeholder='Age'
                    onChange={this.handleChange}
                    value={this.state.age}
                />

                <input
                    type='number'
                    name='height'
                    placeholder='Height'
                    onChange={this.handleChange}
                    value={this.state.height}
                />
                <button type='submit'>Add Smurf</button>
            </form>
        )
    }
    };

const mapStateToProps = state => {
    return{
        createSmurf: state.createSmurf
    }
}

export default connect(
    mapStateToProps, 
    { addSmurf }
)(SmurfForm)