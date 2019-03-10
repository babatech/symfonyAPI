import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Card, Alert, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

export default class Home extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className={"col-md-8 offset-md-2"}>
                <div className={"row campaigns"}>
                    <div className={"col-md-12"}>
                        <h3>Home page</h3>
                    </div>
                    <div className={"col-md-12"}>
                        <div className="searchbar float-left">
                            <div className="input-group mb-2">
                                <input type="text"
                                       className="form-control"
                                       id="inlineFormInputGroup"
                                       placeholder="Search"
                                />
                            </div>
                        </div>
                        <div className={"float-right"}>
                            <select className="form-control" >
                                <option value={"DF"}>Default</option>
                                <option value={"TM"}>Top match</option>
                                <option value={"BM"}>best match</option>
                                <option value={"NE"}>newest​</option>
                                <option value={"RA"}>rating​ ​ average​</option>
                                <option value={"DI"}>distance​</option>
                                <option value={"PO"}>popularity​</option>
                                <option value={"AP"}>average​ ​ product​ ​ price​</option>
                                <option value={"DC"}>delivery costs</option>
                                <option value={"MC"}> minimum costs​</option>
                            </select>
                        </div>
                    </div>

                    <h4>SQL queries:</h4>
                    <p>
                        <b>showing all campaigns of advertiser #100 that have more than 50 ads</b><br/>
                        SELECT c.name, count(a.campaign_id) AS numberOfAds <br/>
                        FROM campaign c <br/>
                        LEFT JOIN ads a ON (c.id = a.campaign_id) <br/>
                        WHERE c.advertiser_id = 100 <br/>
                        GROUP BY c.id <br/>
                        HAVING numberOfAds > 50<br/>

                        <br/><br/><br/>
                        <b>showing all campaigns that do not have any ads</b>
                        SELECT c.id as campaignID, c.name AS campaignName , count(a.campaign_id) AS numberOfAds<br/>
                        FROM campaign c<br/>
                        LEFT JOIN ads a<br/>
                        ON (c.id = a.campaign_id)<br/>
                        GROUP BY c.id<br/>
                        HAVING numberOfAds = 0<br/>

                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <h4>API</h4>
                    <p>
                        <b>selecting a specific ad</b><br/>

                        <b>selecting all ads of a specific campaign</b><br/>

                        <b>selecting all ads of a specific advertiser</b><br/>

                        <b>creating an ad</b><br/>

                        <b>modifying a specific ad</b><br/>
                    </p>
                </div>
            </div>
        );
    }
}