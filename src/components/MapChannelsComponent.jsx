import React from 'react';
import schema from '../assets/schema.json'
import './MapChannelsComponent.css'
import PrimaryChannelButton from './PrimaryChannelButton';
const MapChannelsComponent = () => {
    return (
        <div className='table'>
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
                            <td><PrimaryChannelButton /></td>
                            <td><PrimaryChannelButton /></td>
                            <td className='link'>+ Add Backup Channel</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MapChannelsComponent;
