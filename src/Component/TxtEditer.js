import React, { useState } from "react";
function TxtEditer(props){
var[message,setMessage]=useState("write your code")
function On_change(e){
setMessage(e.target.value)
}
function Upper_case(e){
    setMessage(message.toUpperCase())
}
function Lower_case(e){
    setMessage(message.toLowerCase())
}
    return(
        <>
        <div>
            <h1>hello everyone</h1>
        <input type="text" onChange={On_change} value={message} name="" id=""/>
        <input type="button" onClick={Upper_case} value="CHANGE TO UPPPER CASE"/>
        <input type="button" onClick={Lower_case} value="CHANGE TO LOWER CASE"/>
        </div>
        </>
    )
}
export default TxtEditer;