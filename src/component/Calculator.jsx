import React from 'react'
import Button from './sub/Button'
import Screen from './sub/Screen'
import "./calc.css"

function Calculator(props) {

  return(
    <div>
      <h1 className="title">Calculator</h1>
      <div className="container">
        <Screen class={'output'} result={0}/>
        <div className="ops">
            <Button title={"7"} class={"btn btn-warning"}/>
            <Button title={"8"} class={"btn"}/>
            <Button title={"9"} class={"btn"}/>
            <Button title={"/"} class={"btn btn-warning"}/>

            <Button title={"4"} class={"btn"}/>
            <Button title={"5"} class={"btn btn-warning"}/>
            <Button title={"6"} class={"btn btn-warning"}/>
            <Button title={"*"} class={"btn"}/>

            <Button title={"1"} class={"btn btn-warning"}/>
            <Button title={"2"} class={"btn"}/>
            <Button title={"3"} class={"btn"}/>
            <Button title={"-"} class={"btn btn-warning"}/>

            <Button title={"."} class={"btn btn-warning"}/>
            <Button title={"0"} class={"btn btn-warning"}/>
            <Button title={"+"} class={"btn"}/>
            <Button title={"%"}class={"btn"}/>

            <Button title={"Clear"} class={"btn"}/>
            <Button title={"="} class={"btn btn-success"}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator
