import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/cadastro' element={<SignUp/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    )

}

export default MainRoutes;