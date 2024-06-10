import React, { useState } from 'react'

function Calculator(props) {
    var [firstValue, setFirstValue] = useState()
    var [secondValue, setSecondValue] = useState()
    var [resultValue, setResultValue] = useState()

    function onFirstclick(e) {
        setFirstValue(e.target.value)
    }
    function onSecondclick(e) {
        setSecondValue(e.target.value)
    }
    function addclick() {
        setResultValue(parseInt(firstValue) + parseInt(secondValue))
    }
    function subclick() {
        setResultValue(parseInt(firstValue) - parseInt(secondValue))
    }
    function mulclick() {
        setResultValue(parseInt(firstValue) * parseInt(secondValue))
    }
    function divclick() {
        setResultValue(parseInt(firstValue) / parseInt(secondValue))
    }

    return (
        <>
            <label htmlFor="txt1">No1</label>
            <input type='text' id='txt1' onChange={onFirstclick} value={firstValue} placeholder="" />
            <br />
            <label fohtmlFor="txt2">No1</label>
            <input type='text' id='txt2' onChange={onSecondclick} value={secondValue} placeholder='' />
            <br />
            <label fohtmlFor="result">Result</label>
            <input type='text' id='result' value={resultValue} placeholder='' readOnly />
            <br />
            <input type='button' onClick={addclick} value="+" />
            <input type='button' onClick={subclick} value="-" />
            <input type='button' onClick={mulclick} value="*" />
            <input type='button' onClick={divclick} value="/" />
        </>

    )
}

export default Calculator;