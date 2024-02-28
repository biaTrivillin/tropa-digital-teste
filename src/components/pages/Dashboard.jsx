import Menu from "../layout/menu"
import '../../styles/Dashboard.css'
import LineChart from "../layout/LineChart"
import PieChart from "../layout/PieChart"
import BarChart from "../layout/BarChart"
import TwoBarsChart from "../layout/TwoBarsChart"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoBell } from "react-icons/go";


function Dashboard() {

  if (localStorage.getItem('token') == null) {
    window.location.href = '/'
  }


    return (
      <>
        <Menu/>
        <div className="dashboard_container">
          <nav className="search_bar_container">
            <FaMagnifyingGlass className="search_icon"/>
            <input id="search_bar" placeholder="Pesquisar" type="text" />
            <GoBell className="bell_icon"/>
          </nav>
          <h1 className="dashboard_title">Dashboard</h1>
          <div className="charts_container">
            <LineChart/>
            <PieChart/>
            <BarChart/>
            <TwoBarsChart/>
          </div>
        </div>
      </>
    )
  
}
  
export default Dashboard