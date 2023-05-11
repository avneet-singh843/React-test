import React, { useState, useRef } from 'react';
import "./pages.css";
import "../components/FooterComponent.css"
import HeaderComponent from "../components/HeaderComponent";
import SavePreviewComponent from "../components/SavePreviewComponent";
import SideBarComponent from "../components/SideBarComponent";
import StepperComponent from "../components/StepperComponent";
import UploadFileComponent from "../components/UploadFileComponent";
import MapChannelsComponent from "../components/MapChannelsComponent";

const MontagesPage = () => {
    const [index, setIndex] = useState(1);
    const stepperRef = useRef();

    const handleNextClick = () => {
        if (stepperRef.current) {
            stepperRef.current.handleNext();
        }
        setIndex(prevIndex => prevIndex + 1);
    }

    const handleBackClick = () => {
        setIndex(prevIndex => prevIndex - 1);
    }

    const handleCancelClick = () => {
        setIndex(prevIndex => 1);
    }

    const displayComponent = () => {
        if (index === 1) {
            return <UploadFileComponent />;
        }
        if (index === 2) {
            return <MapChannelsComponent />;
        }
        if (index >= 3) {
            return <SavePreviewComponent />;
        }
        return null;
    }

    return (
        <div className="content">
            <div className="sidebarContent">
                <SideBarComponent />
            </div>
            <div className="mainContent">
                <HeaderComponent />
                <StepperComponent ref={stepperRef} />
                {displayComponent()}
                <div className="footer">
                    <div className="left">
                        <button disabled={index <= 1} className="back" onClick={handleBackClick}>Back</button>
                        <button className="cancel" onClick={handleCancelClick}>Cancel Montage</button>
                    </div>
                    <div className="right">
                        <button disabled={index > 3} className="nextComponent" onClick={handleNextClick}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MontagesPage;
