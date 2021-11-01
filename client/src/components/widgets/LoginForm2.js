import React, { useState } from 'react'

const LoginForm2 = () => {

const [login, setLogin] = useState({
    email: "",
    password: ""
})

const [odgovorOdBackend, setOdgovorOdBackend] = useState()


const userLogin = async (e) => {
    e.preventDefault()
    fetch("http://localhost:10001/api/v1/auth/login",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(data => setOdgovorOdBackend(data))
    .catch(err => console.error(err))
    await window.localStorage.setItem("JWT",odgovorOdBackend.jwt)
}
console.log(odgovorOdBackend)

    return (
        <div className="login-form">
        <Form onSubmit={userLogin}>
          <FormGroup>
            <FormLabel className='text-style'>E-mail</FormLabel>
            <FormControl type='email' placeholder='user@domain.com' name='email' className="placeholder-style" value={login.email} onChange={(e) => {setLogin({...login, email: e.target.value})}}/>
            <FormLabel className='text-style' id="text-style-2">Password</FormLabel>
            <FormControl type='password' placeholder='******' name='password' className="placeholder-style" value={login.password} onChange={(e) => {setLogin({...login, password: e.target.value})}} />
          </FormGroup>
          <button type="submit" className="btn">Log in</button>
        </Form>
      </div>
    )
}

export default LoginForm2
