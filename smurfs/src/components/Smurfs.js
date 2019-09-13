import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../actions";
import Smurf from './Smurf';





const Smurfs = ({ getSmurfs, isFetching, smurfs }) => {
  
  useEffect(() => {
    
    getSmurfs();
  }, [getSmurfs]);

  if (isFetching) {
    return <h3>Gargamel is searching out Smurfs!</h3>;
  }

  return (
    <div>
      
      <button onClick={getSmurfs}>Find More Smurfs</button>
      <h2>Smurfs:</h2>
      <div>
        {smurfs.map(item => (
          <div>
            <Smurf name = {item.name}
                   age = {item.age} 
                   height = {item.height} 
                   id = {item.id} 
                   key = {item.id}
                    /> 
           
           </div>
        ))}
      </div>       
    </div>
  );
};

const mapStateToProps = state => ({
 
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,

    
  
});



export default connect(
  mapStateToProps,
  { getSmurfs }
  )(Smurfs);