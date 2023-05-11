// import React, { Component } from 'react';
// import "./FooterComponent.css"
// window.index = 1;

// class FooterComponent extends Component {
//     handleNextClick = () => {
//         window.index++;
//         console.log(window.index);
//     }

//     handleBackClick = () => {
//         window.index--;
//         console.log(window.index);
//     }
//     render() {
//         return (
//             <div className="footer">
//                 <div className="left">
//                     <button className="back" onClick={this.handleBackClick}>Back</button>
//                     <button className="cancel" onClick={() => { console.log("cancel") }}>Cancel Montage</button>
//                 </div>
//                 <div className="right">
//                     <button className="nextComponent" onClick={this.handleNextClick}>Next</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default FooterComponent;


import React, { Component } from 'react';
import "./FooterComponent.css"

class FooterComponent extends Component {
    handleNextClick = () => {
        // Call the handleNext function from the StepperComponent
        if (typeof this.props.handleNext === 'function') {
            this.props.handleNext();
        }

        // Perform the existing functionality of the Next button in the FooterComponent
        // Add your code here...
    }

    handleBackClick = () => {
        // Call the handleBack function from the StepperComponent
        if (typeof this.props.handleBack === 'function') {
            this.props.handleBack();
        }
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
