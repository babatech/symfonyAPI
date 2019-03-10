import React from 'react';

export default class API extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className={"col-md-12"}>
                <div className="jumbotron">
                    <h3 className="display-5">API:</h3>
                    <b>selecting a specific ad</b><br/>
                    <p>
                        <b>Protocol: </b> HTTP <br/>
                        <b>Method: </b> GET <br/>
                        <b>URi: </b> ad/adID <br/>
                        <b>Content-Type:application/json </b>  <br/>
                        <b>RequestBody</b><br/>
                        <code>&#123;
                            &#125;
                        </code><br/><br/>
                        <a href="http://localhost:8000/ad/2" target="_blank">http://localhost:8000/ad/2</a><br/>
                        <span>run the app to see the test url</span>
                    </p>

                    <b>selecting all ads of a specific campaign</b><br/>
                    <p>
                        <b>Protocol: </b> HTTP <br/>
                        <b>Method: </b> GET <br/>
                        <b>URi: </b> campaign/campaignID <br/>
                        <b>Content-Type:application/json </b>  <br/>
                        <b>RequestBody</b><br/>
                        <code>&#123;
                            &#125;
                        </code><br/><br/>
                        <a href="http://localhost:8000/campaign/100" target="_blank">http://localhost:8000/campaign/100</a><br/>
                        <span>run the app to see the test url</span>
                    </p>
                    <b>selecting all ads of a specific advertiser</b><br/>
                    <p>
                        <b>Protocol: </b> HTTP <br/>
                        <b>Method: </b> GET <br/>
                        <b>URi: </b> advertiser/listads/advertiserID <br/>
                        <b>Content-Type:application/json </b>  <br/>
                        <b>RequestBody</b><br/>
                        <code>&#123;
                            &#125;
                        </code><br/><br/>
                        <a href="http://localhost:8000/advertiser/listads/80" target="_blank">http://localhost:8000/advertiser/listads/80</a><br/>
                        <span>run the app to see the test url</span>
                    </p>
                    <b>creating an ad</b><br/>
                    <p>
                        <b>Protocol: </b> HTTP <br/>
                        <b>Method: </b> POST <br/>
                        <b>URi: </b> ad/new <br/>
                        <b>Content-Type:application/json </b>  <br/>
                        <b>RequestBody</b><br/>
                        <code>&#123;<br/>
                            &nbsp;"action": "NewAd"<br/>
                            &nbsp;"ad": &#123;<br/>
                            &nbsp;&nbsp;    "title": "Sample title",<br/>
                            &nbsp;&nbsp;    "text":  "Sample text"<br/>
                            &nbsp;&nbsp;    "image":  "Sample image"<br/>
                            &nbsp;&nbsp;    "sponsoredBy":  "Sample Sponsor"<br/>
                            &nbsp;&nbsp;    "trackingUrl":  "sample URL"<br/>
                            &nbsp;&#125;<br/>
                            &#125;
                        </code><br/>
                        <span>No server implementation of this functionality</span>
                    </p>

                    <b>modifying a specific ad</b><br/>
                    <p>
                        <b>Protocol: </b> HTTP <br/>
                        <b>Method: </b> PUT <br/>
                        <b>URi: </b> ad/update/adID <br/>
                        <b>Content-Type:application/json </b>  <br/>
                        <b>RequestBody</b><br/>
                        <code>&#123;<br/>
                            &nbsp;"action": "UpdateAd",<br/>
                            &nbsp;"id": "AdID",<br/>
                            &nbsp;"ad": &#123;<br/>
                            &nbsp;&nbsp;    "title": "Updated title",<br/>
                            &nbsp;&nbsp;    "text":  "Updated text"<br/>
                            &nbsp;&nbsp;    "image":  "Updated image"<br/>
                            &nbsp;&nbsp;    "sponsoredBy":  "Updated Sponsor"<br/>
                            &nbsp;&nbsp;    "trackingUrl":  "Updated URL"<br/>
                            &nbsp;&#125;<br/>
                            &#125;<br/>
                        </code><br/>
                        <span>No server implementation of this functionality</span>
                    </p>
                </div>
            </div>
        );
    }
}