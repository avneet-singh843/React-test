import React, { useState, useEffect } from 'react';
import './PrimaryChannelButton.css';

const PrimaryChannelButton = ({ selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(selectedOption);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    useEffect(() => {
        setCurrentOption(selectedOption);
    }, [selectedOption]);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {currentOption ? currentOption : 'Select Channel'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => handleOptionSelect('C3:A2')}>C3:A2</li>
                    <li onClick={() => handleOptionSelect('C3')}>C3</li>
                    <li onClick={() => handleOptionSelect('C4:A1')}>C4:A1</li>
                    <li onClick={() => handleOptionSelect('EOGL')}>EOGL</li>
                    <li onClick={() => handleOptionSelect('EOHR')}>EOHR</li>
                    <li onClick={() => handleOptionSelect('EMG')}>EMG</li>
                    <li onClick={() => handleOptionSelect('NULL')}>NULL</li>
                    <li onClick={() => handleOptionSelect('N/A')}>N/A</li>
                </ul>
            )}
        </div>
    );
};

export default PrimaryChannelButton;
