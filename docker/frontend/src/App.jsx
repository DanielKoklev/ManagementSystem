import './App.css'
import DepartmentComponent from './componenets/DepartmentComponent'
import EmployeeComponent from './componenets/EmployeeComponent'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import Hello from './componenets/Hello'
import ListDepartmentComponent from './componenets/ListDepartmentComponent'
import ListEmployeeComponent from './componenets/ListEmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Footer />
        <Header />
          <Routes>
            <Route path='/' element = { <Hello />}></Route>
            <Route path='/employees' element = { <ListEmployeeComponent />}></Route>
            <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
            <Route path='/update-employee/:id' element = {<EmployeeComponent />}></Route>
            <Route path='/departments' element = {<ListDepartmentComponent /> }></Route>
            <Route path='/add-department' element = {<DepartmentComponent />}></Route>
            <Route path='/update-department/:id' element = {<DepartmentComponent />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
