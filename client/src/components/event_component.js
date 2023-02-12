import React from 'react';
import '../styles/card.css';

const EventComponent = () => {

    return (
        <div className="col">
                <div className="card text-center mb-4 eventCard">
                    <div className="card-body">
                        <h5 className="card-title">Barbeque at the park</h5>
                        <p className="card-text">Come join us this Sunday evening at Richardson prarie creek park.</p>
                        <a href="#" className="btn btn-primary">Join !</a>
                    </div>
                </div>
        </div>
    )
}

export default EventComponent