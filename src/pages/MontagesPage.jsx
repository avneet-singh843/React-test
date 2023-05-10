import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import SavePreviewComponent from "../components/SavePreviewComponent";
import SideBarComponent from "../components/SideBarComponent";
import StepperComponent from "../components/StepperComponent";
import UploadFileComponent from "../components/UploadFileComponent";
import MapChannelsComponent from "../components/MapChannelsComponent";


import "./pages.css"
const MontagesPage = () => {
    return (
        <>
            <div className="content">
                <div className="sidebarContent">
                    <SideBarComponent />
                </div>
                <div className="mainContent">
                    <HeaderComponent />
                    <StepperComponent />
                    <UploadFileComponent />
                    <FooterComponent />
                    <MapChannelsComponent />
                    <SavePreviewComponent />
                </div>
            </div>
        </>
    );
}
export default MontagesPage;