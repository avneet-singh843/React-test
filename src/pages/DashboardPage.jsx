import HeaderComponent from "../components/HeaderComponent";
import SideBarComponent from "../components/SideBarComponent";
const DashboardPage = () => {
    return (
        <>
            <div className="content">
                <div className="sidebarContent">
                    <SideBarComponent />
                </div>
                <div className="mainContent">
                    <HeaderComponent />
                    <h1>This is DashboardPage</h1>
                </div>
            </div>
        </>
    );
}
export default DashboardPage;