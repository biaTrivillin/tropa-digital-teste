import { FaBars } from "react-icons/fa";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { LuFilePlus } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
// import { useState } from "react";

import userImg from '../../assets/imgs/user-img.png'

import '../../styles/Menu.css'
import { useState } from "react";

function Menu() {

    // const [userName, setUserName] = useState('')
    // const [userEmail, setUserEmail] = useState(''
    
    let user = JSON.parse(localStorage.getItem('user'))
    // setUserEmail(user.email)
    
    const [itemStyleOne, setItemStyleOne] = useState('item_unclicked')
    const [itemStyleTwo, setItemStyleTwo] = useState('item_unclicked')
    const [itemStyleThree, setItemStyleThree] = useState('item_unclicked')
    const [itemStyleFour, setItemStyleFour] = useState('item_unclicked')
    const [itemStyleFive, setItemStyleFive] = useState('item_unclicked')

    const [showMenuInformationStyle, setShowMenuInformationStyle] = useState('hide_information')
    const [showMenuStyle, setShowMenuStyle] = useState('menu_container hide_menu')

    const showMenu = () => {
        if (showMenuInformationStyle !== 'show_information') setShowMenuInformationStyle('show_information')
        else setShowMenuInformationStyle('hide_information')

        if (showMenuStyle !== 'menu_container appear_menu') setShowMenuStyle('menu_container appear_menu')
        else setShowMenuStyle('menu_container hide_menu')
    }
    
    const backToLogin = () => {
        window.location.href = '/'
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    

    const changeItemStyle = (indice) => {

        let itemArray = [setItemStyleOne, setItemStyleTwo, setItemStyleThree, setItemStyleFour, setItemStyleFive]

        itemArray.forEach((element) => element('item_unclicked'))

        itemArray[indice]('item_clicked')

    }
  
  
      return (
        <aside className={showMenuStyle}>
            <div>
                <div className="user_information">
                    <button onClick={showMenu} className="menu_btn"><FaBars /></button>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <img src={userImg} alt="" />
                </div>
                <div id="menu_information" className={showMenuInformationStyle}>
                    <ul className="menu_list">
                        <li className="menu_item"><a className={itemStyleOne} onClick={() => {changeItemStyle(0)}}><LuLayoutPanelLeft />Dashboard</a></li>
                    </ul>
                    <ul className="menu_list">
                        <li className="menu_item"><a className={itemStyleTwo} onClick={() => {changeItemStyle(1)}}><LuFilePlus />LoremIpsum</a></li>
                        <li className="menu_item"><a className={itemStyleThree} onClick={() => {changeItemStyle(2)}}><FaRegFileAlt />LoremIpsum</a></li>
                        <li className="menu_item"><a className={itemStyleFour}onClick={() => {changeItemStyle(3)}}><BsChatLeftDots/>LoremIpsum</a></li>
                    </ul>
                    <ul className="menu_list">
                        <li className="menu_item"><a className={itemStyleFive} onClick={() => {changeItemStyle(4)}}><BsPersonCircle />LoremIpsum</a></li>
                    </ul>
                </div>
            </div>
            <button className="back_btn_dashboard" onClick={() => {backToLogin}}><IoExitOutline /></button>
        </aside>
      )
    
  }
    
  export default Menu