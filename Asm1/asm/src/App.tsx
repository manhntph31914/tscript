import { Route,Routes } from 'react-router-dom'
import './css/style.css'
import './App.css'
import Home from './home'
import Login from './login'
import Cate from './cate'
import Del from './del'
import Err from './err'
import Add from './add'
function App() {
 
  return (
    <>
    <Routes>
      <Route path='/home' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/cate' Component={Cate}/>
      <Route path='/del' Component={Del}/>
      <Route path='/err' Component={Err}/>
      <Route path='/add' Component={Add}/>
    </Routes>
    
      
    </>
  )
}

export default App
