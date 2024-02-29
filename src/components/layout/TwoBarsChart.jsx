import { IoIosInformationCircle } from "react-icons/io";
import '../../styles/charts.css';
import horizontalBarChartImg from '../../assets/imgs/horizontal-bar-chart.png';

function TwoBarsChart () {
    
    return (
        <div className="chart_container" id="two_bar">
            <div className="information_chart_container">
                <IoIosInformationCircle className="information_icon"/>
                <h3>PRIMARY TEXT</h3>
                <h4>Secondary text</h4>
            </div>
            <div className="chart_img_container">
                <img src={horizontalBarChartImg}/>
            </div>
        </div>
    )
}


export default TwoBarsChart;