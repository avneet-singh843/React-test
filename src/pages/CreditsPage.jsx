import HeaderComponent from "../components/HeaderComponent";
import SideBarComponent from "../components/SideBarComponent";
const CreditsPage = () => {
    return (
        <>
            <div className="content">
                <div className="sidebarContent">
                    <SideBarComponent />
                </div>
                <div className="mainContent">
                    <HeaderComponent />
                    <h1>This is CreditsPage</h1>
                </div>
            </div>
        </>
    );
}
export default CreditsPage;