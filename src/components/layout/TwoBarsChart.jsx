import { IoIosInformationCircle } from "react-icons/io";
import '../../styles/charts.css'

function TwoBarsChart () {
    
    return (
        <div className="chart_container" id="two_bar">
            <div className="information_chart_container">
                <IoIosInformationCircle className="information_icon"/>
                <h3>LoremIpsum</h3>
                <h4>LoremIpsum</h4>
            </div>
            <div>
                <canvas></canvas>
            </div>
        </div>
    )
}


export default TwoBarsChart