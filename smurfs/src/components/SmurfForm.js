import React from 'react';
import { createSmurf } from '../actions/index';
import { connect } from 'react-redux';


class SmurfForm extends React.Component {
    state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = e => {
      // e.preventDefault();
      if (this.state.name.trim() && this.state.age.trim() && this.state.height.trim() && this.state.id.trim()) {
        this.props.onAddSmurf(this.state);
        this.handleReset();
      }
    };
  
    handleReset = () => {
      this.setState({
        name:'',
        age: '',
        height: '',
        id: '',
      });
    };
  
    render() {
      return (
        <div>
            <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                onChange={ this.handleInputChange }
                value={ this.state.name }
              />
            </div>
            <div className="form-group">
            <input
                type="text"
                placeholder="age"
                className="form-control"
                name="age"
                onChange={ this.handleInputChange }
                value={ this.state.age }
              />
              <input
                type="text"
                placeholder="height"
                className="form-control"
                name="height"
                onChange={ this.handleInputChange }
                value={ this.state.height }
              />
              <input
                type="text"
                placeholder="id"
                className="form-control"
                name="id"
                onChange={ this.handleInputChange }
                value={ this.state.id }
              />

            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add Smurf</button>
              <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                Reset
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  const mapdispatchToProps = dispatch => {
    return {
      onAddSmurf: smurf => {
        dispatch(createSmurf(smurf));
      }
    };
  };
  
  export default connect(
    null,
    mapdispatchToProps
  )(SmurfForm);