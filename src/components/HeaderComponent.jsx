import "./HeaderComponent.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComponent = () => {
    return (
        <>
            <div className="navbar">
                <div>Test_Study</div>
                <div className="User"><AccountCircleIcon className="icon" /> <span>Avneet Singh</span></div>
            </div>
        </>
    );
}
export default HeaderComponent;