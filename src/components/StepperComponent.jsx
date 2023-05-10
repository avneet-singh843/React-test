import "./StepperComponent.css"
import React, { useState } from 'react';

const StepperComponent = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="progress-bar-container">
            <svg className="progress-bar-svg" viewBox="0 0 400 50">
                {[1, 2, 3].map((num, index) => (
                    <g key={num}>
                        <circle
                            className={`progress-bar-circle ${currentStep > index ? "blue" : "white"
                                }`}
                            cx={(index + 1) * 100}
                            cy="25"
                            r="20"
                        />
                        <text
                            className="progress-bar-text"
                            x={(index + 1) * 100}
                            y="30"
                            textAnchor="middle"
                        >
                            {num}
                        </text>
                    </g>
                ))}
            </svg>
            <button className="next-button" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default StepperComponent;
