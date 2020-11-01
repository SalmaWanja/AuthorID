import React, { Component } from 'react'


class Results extends Component {


    render() {
        return (<div className='appContainer'>
            <div className="otherContent">
                <span className="bodyLabel"><b>Predicted Author</b></span>
                <div className="text">
                    <span>{this.props.location.state.prediction}</span>
                </div>
            </div>
        </div>)
    }

}

export default Results