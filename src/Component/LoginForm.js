import React from "react";
function LoginForm(props){
    return(
<>
<div>
    <label for="txt">{props.value1}</label>
    <input id="txt" name="login" placeholder={props.value1}/>
    <br/>
    <label for="txt">{props.value2}</label>
    <input id="txt" name="login" placeholder={props.value2}/>
    <br/>
    <input type="button" value="Login"/>
</div>
</>
    )
};
export default LoginForm;