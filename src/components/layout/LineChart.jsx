import { IoIosInformationCircle } from "react-icons/io";
import '../../styles/charts.css'
import lineChartImg from '../../assets/imgs/line-chart.png'


function LineChart () {
    
    return (
        <div className="chart_container">
            <div className="information_chart_container">
                <IoIosInformationCircle className="information_icon"/>
                <h3>LoremIpsum</h3>
                <h2>5.987,37</h2>
                <h4>LoremIpsum</h4>
            </div>
            <div className="chart_img_container">
                <img src={lineChartImg}/>
            </div>
        </div>
    )
}


export default LineChart