import { useState } from 'react'
import {Message} from '../Message'
import { Input } from '../Input'
import { Button } from '../Button'

export const Greet = () => {
  // const names = {}
  const [names, setNames] = useState({});
  const firstNameKey = "first"
  const lastNameKey = "last"
  // let message = "Welcome"
  const [message, setMessage] = useState("");
  const receiveDataFromChild =(data, key)=>{
    // names[key] = data;
    const temp ={}
    temp[key] = data;
    setNames({...names,...temp});
    // console.log(names);
  }
  const initCap = (value) =>value.charAt(0).toUpperCase()+value.substring(1).toLowerCase();

  const showFullName = () =>{
    setMessage("Welcome "+initCap(names[firstNameKey])+" "+initCap(names[lastNameKey]))// re-rendering happens here
    console.log("Message : "+message);
  }
  const clearAll = () =>{
    console.log("cleared!!");
    const temp = {}
    temp[firstNameKey] = ""
    temp[lastNameKey] = ""
    setNames(temp)
    setMessage("")
  }
  return (
    <div>
        <Message msg="Greet App" myclass="info"/>
        <Input val={names[firstNameKey]} fn={receiveDataFromChild} inputKey={firstNameKey} lbl='First Name' placeholder='Type First Name'/>
        <Input val={names[lastNameKey]} fn={receiveDataFromChild} inputKey={lastNameKey} lbl='Last Name' placeholder='Type Last Name'/>
        <Button fn={showFullName} msg="Greet" cssclass="btn btn-primary me-2"/>
        <Button fn={clearAll} msg="Clear All" cssclass="btn btn-secondary"/>
        {/* **************** */}
        {message && <Message msg={message} myclass="success"/>}
    </div>
  )
}

export default Greet