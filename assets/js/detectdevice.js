import React from 'react';
import {
    BrowserView,
    MobileOnlyView,
    TabletView,
    osVersion,
    osName,
    browserName,
    browserVersion,
    getUA
} from "react-device-detect";
export default class DetectDevice extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <p >
                <BrowserView><b>Device: </b>Desktop</BrowserView>
                <TabletView><b>Device: </b>Tablet</TabletView>
                <MobileOnlyView><b>Device: </b>Mobile</MobileOnlyView>

                <b>OS: </b>
                {osName} {osVersion}<br/>

                <b>Browser: </b>
                {browserName} {browserVersion}<br/>

                <b>User Agent: </b>
                {getUA}<br/>
            </p>
        );
    }
}