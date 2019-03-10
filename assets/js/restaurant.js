import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Card, Alert, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

export default class Restaurant extends React.Component {
    constructor(){
        super();
        this.URibase='campaign';
        this.URisearch='';
        this.search='';
        this.sort='DF';
        this.URisort = '/sort/'+this.sort;
        this.topMatch='';
        this.state = {
            isLoading: true,
            restaurants: [],
            search: '',
            error: null
        };
        this.handleSearch = (e) => {
            this.search=e.target.value;
            if(this.search ===""){
                this.URisearch = "";
            }else{
                this.URisearch = '/search/'+this.search;
            }
            this.fatchData()
        };
        this.handleSort = (e) => {
            this.sort=e.target.value;
            this.URisort = '/sort/'+this.sort;
            this.fatchData()
        };
    }


    componentDidMount() {
        this.fatchData();
    }

    fatchData(){
        let uri = this.URibase+this.URisort+this.URisearch
        fetch(uri)
            .then(response => response.json())
            // ...then we update the restaurants state
            .then(data =>
                this.setState({
                    restaurants: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { isLoading, restaurants, error } = this.state;
        return (
            <div className={"col-md-8 offset-md-2"}>
                <div className={"row restaurants"}>
                    <div className={"col-md-12"}>
                        <h3>restaurants</h3>
                    </div>
                    <div className={"col-md-12"}>
                        <div className="searchbar float-left">
                            <div className="input-group mb-2">
                                <input type="text"
                                       className="form-control"
                                       id="inlineFormInputGroup"
                                       placeholder="Search"
                                       onChangeCapture={this.handleSearch}
                                />
                            </div>
                        </div>
                        <div className={"float-right"}>
                            <select className="form-control"
                                    onChange={this.handleSort} >
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
                    {error ? <Alert >{error.message}</Alert> : null}
                    {!isLoading ? (
                        restaurants.map(restaurant => {
                            const { id, favourite, name, status, ratingAverage, minCost, bestMatch, averageProductPrice, deliveryCosts, popularity, newest, distance } = restaurant;
                            return (
                                <div className={"col-md-4 col-sm-4  restaurant"} key={id}>
                                    <Card  className={"text-white bg-primary "}>
                                        <CardBody>
                                            <CardTitle>{name}</CardTitle>
                                            <CardSubtitle><b>Status: </b>{status} <br/><b>Rating: </b>{ratingAverage}</CardSubtitle>
                                            <CardText>
                                                <b>Average Price: </b>{averageProductPrice} <br/>
                                                <b>Delivery Costs: </b>{deliveryCosts}<br/>
                                                <b>Popularity</b>{popularity}<br/>
                                                <b>Distance: </b>{distance}<br/>
                                                <b>Newest: </b>{newest}<br/>
                                                <b>Best Match: </b>{bestMatch}<br/>
                                                <b>Min Cost: </b>{minCost}<br/>
                                            </CardText>
                                        </CardBody>
                                        <CardFooter>
                                            <a className={[ favourite ? 'btn btn-danger': 'btn btn-success']} href={favourite ? "unfavourite/"+id: "favourite/"+id}>{favourite ? 'Remove form favourite' : 'Add to favourite'}</a>
                                        </CardFooter>
                                    </Card>
                                </div>
                            );
                        })
                        // If there is a delay in data, let's let the restaurant know it's loading
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </div>
            </div>
        );
    }
}