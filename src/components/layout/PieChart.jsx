import { IoIosInformationCircle } from "react-icons/io";
import '../../styles/charts.css'
import pieChartImg from '../../assets/imgs/pie-chart.png'

function PieChart () {
    
    return (
        <div className="chart_container">
            <div className="information_chart_container">
                <IoIosInformationCircle className="information_icon"/>
                <h3>PRIMARY TEXT</h3>
                <h4>Secondary text</h4>
            </div>
            <div className="chart_img_container">
                <img src={pieChartImg}/>
            </div>
        </div>
    )
}


export default PieChart