import React from 'react';

const Smurf = (props) => {
    return (
        <div >
            <div className="row" >
                <div className="col s12 cards-container hoverable">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{ props.smurf.name }</span>
                            <p>Age: { props.smurf.age }</p>
                            <p>Height: { props.smurf.height }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smurf
