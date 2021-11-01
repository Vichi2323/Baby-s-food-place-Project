import React, { useState } from 'react';
import '../../styles/create-acc-form.css';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
// import LoginForm from './LoginForm';

const CreateAccForm = (props) => {

  const [input, setInput] = useState({
    first_name: "",
    email: "",
    password: "",
    last_name: "",
    birthday: "",
    password2: ""
  })

  let history = useHistory()




  const CreateAcc = (e) => {

    if(input.password === input.password2){
    fetch("http://localhost:10001/api/v1/auth/create-account",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
        
      
    })
    .then(res => console.log(res))
   
    .catch(err => console.error(err))
    history.push("/login")
  }else{alert("password not password")}
  }
 

  return (
    <div className="create-account">
      <Form className="form-boxess" >
        <FormGroup className="left-box">
          <FormLabel className='text-style'>First Name</FormLabel>
          <FormControl type='text' placeholder='John' name='first_name' className="bgd-style" value={input.first_name} onChange={(e) => {setInput({...input, first_name: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl type='email' placeholder='john@smith.com' name='email' className="bgd-style" value={input.email} onChange={(e) => {setInput({...input, email: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>Password</FormLabel>
          <FormControl type='password' placeholder='******' name='password' className="bgd-style" value={input.password} onChange={(e) => {setInput({...input, password: e.target.value})}}/>
          <button className='register' type='button' onClick={CreateAcc} >Create Account</button>
        </FormGroup>
        <FormGroup className="right-box">
          <FormLabel className='text-style'>Last Name</FormLabel>
          <FormControl type='text' placeholder='Smith' name='last_name' className="bgd-style" value={input.last_name} onChange={(e) => {setInput({...input, last_name: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>Birthday</FormLabel>
          <FormControl type='date' name='birthday' className="bgd-style" value={input.birthday} onChange={(e) => {setInput({...input, birthday: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>Repeat Password</FormLabel>
          <FormControl type='password' placeholder='******' name='repeatPassword' className="bgd-style" value={input.password2} onChange={(e) => {setInput({...input, password2: e.target.value})}}/>
        </FormGroup>
      </Form>
  
    </div>
  );
};
export default CreateAccForm;



