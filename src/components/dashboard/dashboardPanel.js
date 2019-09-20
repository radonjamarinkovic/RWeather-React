import React from 'react';
import firebase from '../../config/fbConfig';

const DashboardPanel = () => {

    const a = async() => {
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        console.log('USER UID', user.uid);

        const snap = await db.collection("users").doc(user.uid).get()
        .then(doc=>{
            console.log('DOCUMENT DATA', doc.data());
        });
        //const  ab = snap.docs.map(doc => doc.data());
        //console.log(ab); 
    }
    
    return (
        <div>
            <div className="weather-panel-item">
                <div className="weather-panel-head">
                    <div className="panel-title">
                        <span className="panel-delete">
                            More
                        </span>
                        <h4>London</h4>
                        <span className="panel-delete">Delete</span>
                    </div>
                    <div className="panel-body">
                        <div className="img-holder"></div>
                        <span className="temp-value">34°C</span>
                    </div>
                    <div className="panel-footer">
                        <div className="panel-footer-section">
                           <div className="panel-footer-item">
                               <span className="pfi-title">Max temp</span>
                               <span className="pfi-value">34°C</span>
                           </div>
                            <div className="panel-footer-item">
                                <span className="pfi-title">Min temp</span>
                                <span className="pfi-value">26°C</span>
                            </div>
                        </div>

                        <div className="panel-footer-section-2">
                            <button onClick={a} className="panel-button">More Details</button>
                        </div>
                    </div>
                </div>
                <div className="weather-panel-footer">
                    <h4>Additionl info</h4>
                    <div className="weather-footer-section">
                        <div className="weather-footer-section-item">
                            <h4>Humidity</h4>
                            <span className="footer-symbol">¥</span>
                            <p>34<span className="si-addition">%</span></p>
                        </div>
                        <div className="weather-footer-section-item">
                            <h4>Pressure</h4>
                            <span className="footer-symbol">¥</span>
                            <p>1028<span className="si-addition">mBar</span></p>
                        </div>
                        <div className="weather-footer-section-item">
                            <h4>Sunset</h4>
                            <span className="footer-symbol">¥</span>
                            <p>34<span className="si-addition">hours</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPanel;
