import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const CardDiv = styled.div`
width: 40%;

`;

 const Smurf = props => {

    return (

        
        <CardDiv>
            <Card.Group>
                <Card fluid color = 'blue' 
                header ={props.name}
                description = {`Height: ${props.height}`}
                meta = {`Age: ${props.age}`}
                extra = {`ID: ${props.id}`}

                  />    
            </Card.Group>
        </CardDiv>
        
        
    )

}

export default Smurf;