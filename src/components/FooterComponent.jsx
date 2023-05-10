import React, { Component } from 'react';
import Component1 from "../components/UploadFileComponent";
import Component2 from "../components/MapChannelsComponent";
import "./FooterComponent.css"
window.index = 1;

class FooterComponent extends Component {
    handleNextClick = () => {
        window.index++;
        console.log(window.index);
    }

    handleBackClick = () => {
        window.index--;
        console.log(window.index);
    }
    render() {
        return (
            <div className="footer">
                <div className="left">
                    <button className="back" onClick={this.handleBackClick}>Back</button>
                    <button className="cancel" onClick={() => { console.log("cancel") }}>Cancel Montage</button>
                </div>
                <div className="right">
                    <button className="nextComponent" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
