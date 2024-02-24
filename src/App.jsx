import {BrowserRouter} from 'react-router-dom'
import MainRoutes from './components/pages/Routes';

function App() {

  return (
    <BrowserRouter>
        <MainRoutes/>
    </BrowserRouter>
  )

}

export default App;