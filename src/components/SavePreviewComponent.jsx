import React from 'react';
import schema from '../assets/schema.json'
import './MapChannelsComponent.css'
import './SavePreviewComponent.css'
import PrimaryChannelButton from './PrimaryChannelButton';
const SavePreviewComponent = () => {
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
                            <td><button className='edit'>Edit Channel</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SavePreviewComponent;
