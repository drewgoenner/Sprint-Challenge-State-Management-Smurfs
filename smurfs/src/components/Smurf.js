import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';


const CardDiv = styled.div`
width: 40%;

`;

 const Smurf = props => {
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
                 {/* <button className="btn btn-danger" type="button" onClick={() => onDelete(props.id)}></button> */}
            </Card.Group>
        </CardDiv>
        
        
    )

}

export default Smurf;

// const mapDispatchToProps = dispatch => {
//     return {
//       onDelete: id => {
//         dispatch(deleteSmurf(id));
//       }
//     };
//   };

//   export default connect(
//     mapDispatchToProps,
//     { deleteSmurf }
//     )(Smurf);



