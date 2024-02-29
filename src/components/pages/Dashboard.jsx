import Menu from "../layout/menu";
import '../../styles/Dashboard.css';
import LineChart from "../layout/LineChart";
import PieChart from "../layout/PieChart";
import BarChart from "../layout/BarChart";
import TwoBarsChart from "../layout/TwoBarsChart";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { useState } from "react";


function Dashboard() {

  const [menuIsShown, setMenuIsShown] = useState('dashboard_container');

  const changePadding = () => {
    if(menuIsShown !== 'dashboard_container change_padding') setMenuIsShown('dashboard_container change_padding');
    else setMenuIsShown('dashboard_container change_padding_hide');
  }

  if (localStorage.getItem('token') == null) {
    window.location.href = '/';
  }

    return (
      <>
        <Menu changePadding={changePadding}/>
        <div className={menuIsShown}>
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
  
export default Dashboard;