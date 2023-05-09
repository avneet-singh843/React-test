import "./FooterComponent.css"
const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="left">
                <button className="back">Back</button>
                <button className="cancel">Cancel Montage</button>
            </div>
            <div className="right">
                <button className="next">Next</button>
            </div>
        </div>
    );
}
export default FooterComponent;