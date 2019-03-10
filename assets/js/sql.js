import React from 'react';

export default class SQL extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className={"col-md-12"}>
                <div className="jumbotron">
                    <h3 className="display-5">SQL queries:</h3>
                    <p>
                        <b>showing all campaigns of advertiser #100 that have more than 50 ads</b><br/>
                        SELECT c.name, count(a.campaign_id) AS numberOfAds <br/>
                        FROM campaign c <br/>
                        LEFT JOIN ads a ON (c.id = a.campaign_id) <br/>
                        WHERE c.advertiser_id = 100 <br/>
                        GROUP BY c.id <br/>
                        HAVING numberOfAds > 50<br/>
                        <a href="http://localhost:8000/campaign/100/50" target="_blank">http://localhost:8000/campaign/100/50</a><br/>
                        <span>run the app to see the test url</span>

                        <hr className="my-4" />
                        <b>showing all campaigns that do not have any ads</b><br/>
                        SELECT c.id as campaignID, c.name AS campaignName , count(a.campaign_id) AS numberOfAds<br/>
                        FROM campaign c<br/>
                        LEFT JOIN ads a<br/>
                        ON (c.id = a.campaign_id)<br/>
                        GROUP BY c.id<br/>
                        HAVING numberOfAds = 0<br/>
                        <a href="http://localhost:8000/campaign/withoutad" target="_blank">http://localhost:8000/campaign/withoutad</a><br/>
                        <span>run the app to see the test url</span>

                    </p>
                </div>
            </div>
        );
    }
}