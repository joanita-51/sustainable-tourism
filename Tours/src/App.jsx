import Home from './Pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Soon from './Pages/Soon'
import Login from './Pages/LoginAccount'
import SignupAccount from './Pages/SignupAccount'
import UserDashboard from './Pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Signup/>}/>
        <Route path='/coming' element= {<Soon/>}/>
        <Route path='/signup' element={<SignupAccount/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/dashboard' element={<UserDashboard/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
