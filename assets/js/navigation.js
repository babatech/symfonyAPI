import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
