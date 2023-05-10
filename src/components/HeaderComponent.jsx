import "./HeaderComponent.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComponent = () => {
    return (
        <>
            <div className="navbar">
                <div>Test_Study</div>
                <div className="User"><AccountCircleIcon style={{ transform: "translateY(5px)" }} /> Avneet Singh</div>
            </div>
        </>
    );
}
export default HeaderComponent;