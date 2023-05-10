import React from 'react';
import schema from '../assets/schema.json'
import './MapChannelsComponent.css'
import PrimaryChannelButton from './PrimaryChannelButton';
import AddChannelComponent from './AddChannelComponent';
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
                            <td className='link'><a href="#"> + Add Backup Channel</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddChannelComponent />
        </div>
    );
}

export default MapChannelsComponent;
