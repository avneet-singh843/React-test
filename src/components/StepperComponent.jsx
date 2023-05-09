import "./StepperComponent.css"
const StepperComponent = () => {
    // const steps = ["Upload EDFs", "Map Channels", "Save & Preview"];
    return (
        // <div className="stepContainer">
        //     {steps?.map((step, i) => (
        //         <div key={i}>
        //             <div className="stepNumber">{i + 1}</div>
        //             <p className="stepTitle">{step}</p>
        //         </div>
        //     ))}
        // </div>
        <div className="progressBar">
            <div className="progressStep progressActive" dataTitle="Upload">1 <span>Upload EDFs</span></div>
            <div className="progressStep" dataTitle="Map">2 <span>Map Channels</span></div>
            <div className="progressStep" dataTitle="Save">3 <span>Save & Preview</span></div>
        </div>
    );
}
export default StepperComponent;