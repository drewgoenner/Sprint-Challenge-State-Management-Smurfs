import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import {deleteSmurf} from '../actions';
import { connect } from 'react-redux';


const CardDiv = styled.div`
width: 40%;

`;

 const Smurf = (props, {onDelete}) => {
     console.log (props)

    return (

        
        <CardDiv>
            <Card.Group>
                <Card fluid color = 'blue' 
                header ={props.name}
                description = {`Height: ${props.height}`}
                meta = {`Age: ${props.age}`}
                extra = {`ID: ${props.id}`}
                  />    
                 <button className="btn btn-danger" type="button" onClick={() => deleteSmurf(props.id)}>Delete</button>
            </Card.Group>
        </CardDiv>
        
        
    )

}



const mapDispatchToProps = dispatch => {
    return {
      onDelete: id => {
        dispatch(deleteSmurf(id));
      }
    };
  };

  export default connect(
    mapDispatchToProps,
    { deleteSmurf }
    )(Smurf);



