import Home from './Pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Signup/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
