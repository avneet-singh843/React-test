import React, { useEffect, useState } from 'react';
import schema from '../assets/schema.json';
import './MapChannelsComponent.css';
import PrimaryChannelButton from './PrimaryChannelButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MapChannelsComponent = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    useEffect(() => {
        const storedOptions = {};

        schema.channels.forEach((channel) => {
            const selectedOption = localStorage.getItem(`selectedOption_${channel}`);
            if (selectedOption) {
                storedOptions[channel] = selectedOption;
            }
        });

        setSelectedOptions(storedOptions);
    }, []);

    const handleOptionSelect = (channel, option) => {
        const updatedOptions = { ...selectedOptions, [channel]: option };
        setSelectedOptions(updatedOptions);
        localStorage.setItem(`selectedOption_${channel}`, option);
    };

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Channels</th>
                        <th>Primary Channel</th>
                        <th>Reference Channel</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {schema.channels.map((channel, index) => (
                        <tr key={index}>
                            <td>{channel}</td>
                            <td>
                                <PrimaryChannelButton
                                    selectedOption={selectedOptions[channel]}
                                    onSelect={(option) => handleOptionSelect(channel, option)}
                                />
                                <ArrowDropDownIcon className="downicon" style={{ transform: "translateY(7px)" }} />
                            </td>
                            <td>
                                <PrimaryChannelButton
                                    selectedOption={selectedOptions[`${channel}-ref`]}
                                    onSelect={(option) => handleOptionSelect(`${channel}-ref`, option)}
                                />
                                <ArrowDropDownIcon className="downicon" style={{ transform: "translateY(7px)" }} />
                            </td>
                            <td className="link">
                                <a href="#"> + Add Backup Channel</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MapChannelsComponent;
