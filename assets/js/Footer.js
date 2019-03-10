import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FooterContainer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center">
                                {/*<a className="fb-ic">*/}
                                    {/*<FontAwesomeIcon icon="facebook" />*/}
                                {/*</a>*/}
                                {/*<a className="tw-ic">*/}
                                    {/*<FontAwesomeIcon icon="twitter-square" />*/}
                                {/*</a>*/}
                                {/*<a className="youtube-ic">*/}
                                    {/*<FontAwesomeIcon icon="youtube" />*/}
                                {/*</a>*/}
                                {/*<a className="ins-ic">*/}
                                    {/*<FontAwesomeIcon icon="instagram " />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2019 Copyright:
                    <a href="http://shahabshakoor.com"> Shahab Shakoor</a>
                </div>
            </footer>
        );
    }
}
