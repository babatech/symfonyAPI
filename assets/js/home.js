import React from 'react';
import SQL  from './sql'
import API  from './api'
import DetectDevice  from './detectdevice'


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            detectDevice: false
        };
        this.handleDeviceDetection = (e) => {
            this.setState({
                detectDevice: true
            })
        };
    }

    render() {
        const { detectDevice } = this.state;
        return (
            <div className={"col-md-8 offset-md-2"}>
                <div className={"row campaigns"}>
                    <div className={"col-md-12"}>
                        <div className="jumbotron">
                            <h3 className="display-5">Device detection</h3>
                            <a onClick={this.handleDeviceDetection} className={"btn btn-primary"}>Detect Device</a>
                            {detectDevice ? <DetectDevice/> : null}
                        </div>
                    </div>
                    <SQL/>
                    <API/>
                </div>
            </div>
        );
    }
}