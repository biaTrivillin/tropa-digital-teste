import { IoIosInformationCircle } from "react-icons/io";
import '../../styles/charts.css'

function LineChart () {
    
    return (
        <div className="chart_container">
            <div className="information_chart_container">
                <IoIosInformationCircle className="information_icon"/>
                <h3>LoremIpsum</h3>
                <h2>5.987,37</h2>
                <h4>LoremIpsum</h4>
            </div>
            <div>
                <canvas></canvas>
            </div>
        </div>
    )
}


export default LineChart