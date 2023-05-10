import "./PrimaryChannelButton.css"
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const PrimaryChannelButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption ? selectedOption : 'Select Channel'}
                <ArrowDropDownIcon className="downicon" />
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
