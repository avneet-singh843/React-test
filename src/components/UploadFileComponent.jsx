import "./UploadFileComponent.css"
import UploadFileIcon from '@mui/icons-material/UploadFile';
const UploadFileComponent = () => {
    return (
        <>
            <div className="dropBox">
                <input type="file" className="uploadHide" id="uploadCustom" />
                <label for="uploadCustom" className="uploadLabel">
                    <UploadFileIcon style={{ fontSize: "10rem", color: "#2F7EC7" }} />
                    <button className="chooseFiles">Browse Files</button>
                    <p className="dragText">or drop files here</p>
                </label>
            </div>
        </>
    );
}
export default UploadFileComponent;