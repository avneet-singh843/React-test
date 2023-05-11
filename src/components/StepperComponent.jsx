import React, { useState, forwardRef, useImperativeHandle } from 'react';
import "./StepperComponent.css"
const StepperComponent = forwardRef(({ onNext }, ref) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(prev => prev + 1);

        if (typeof onNext === 'function') {
            onNext();
        }
    };

    useImperativeHandle(ref, () => ({
        handleNext: handleNext
    }));

    return (
        <div className="progress-bar-container">
            <svg className="progress-bar-svg" viewBox="0 0 400 50">
                {[1, 2, 3].map((num, index) => (
                    <g key={num}>
                        <circle
                            className={`progress-bar-circle ${currentStep > index ? "blue" : "white"}`}
                            cx={(index + 1) * 100}
                            cy="20"
                            r="13"
                        />
                        <text
                            className="progress-bar-text"
                            x={(index + 1) * 100}
                            y="25"
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
});

export default StepperComponent;
