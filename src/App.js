import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Dashbord from '../src/Dashbord'
import EmpForm from '../src/EmpForm'
// import EditEmp from './EditEmp'

const App = () => {
  return (
    <>
        <Switch>          
            <Route exact path="/"><EmpForm /></Route>
            <Route path="/dashbord"><Dashbord /></Route>
            {/* <Route path="/id"><EmpForm/></Route> */}
        </Switch>
    </>
  )
}

export default App
