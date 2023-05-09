import "./HeaderComponent.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComponent = () => {
    return (
        <>
            <div className="navbar">
                <div>Test_Study</div>
                <div className="User"><AccountCircleIcon style={{ width: "40px", height: "40px", transform: "translateY(10px)" }} /> Avneet Singh</div>
            </div>
        </>
    );
}
export default HeaderComponent;