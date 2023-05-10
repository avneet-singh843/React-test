import "./SideBarComponent.css"
import { SideBarData } from "./SideBarData";
const SideBarComponent = () => {
    return (
        <div className="sidebar">
            <div className="sidebarTitle">React Test</div>
            <div className="titleBorder"></div>
            <ul className="sidebarList">
                {SideBarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            id={window.location.pathname === val.link ? "active" : ""}
                            className="row"
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            {" "}
                            <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="creditScore">
                <span className="number">1650</span>
                <span className="text">Total credits available</span>
            </div>
        </div>
    );
}
export default SideBarComponent;