import React from "react";
import PrimaryChannelButton from "./PrimaryChannelButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./MapChannelsComponent.css"
const AddChannelComponent = () => {
    return (
        <>
            <div>
                <table className="addChannelTable">
                    <tbody>
                        <tr>
                            <td></td>
                            <td><PrimaryChannelButton /></td>
                            <td><PrimaryChannelButton /></td>
                            <td className="deleteButton"><DeleteOutlineIcon /><span>Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default AddChannelComponent;