
import { Component } from "react";

import "./DestinationStyles.css";

class DestinationData extends Component {
    render(){
        return (
            <div className={this.props.className}> 
                <div className ="des-text">
                    <h2>{this.props.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: this.props.text }} />
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;