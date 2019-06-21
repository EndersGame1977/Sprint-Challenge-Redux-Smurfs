import React from 'react';
import Smurf from './Smurf';

const Smurfs = (props) => {
    return (
        <div className="container valign-wrapper">
            { props.smurfs.map(smurf => { 
                return <Smurf key={smurf.id} smurf={smurf} />
            }) }
        </div>
    )
}

export default Smurfs;
