import React, { useState, useEffect } from 'react';
import {Form,FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import '../../styles/my-profile.css';



const MyProfileForm = (props) => {
  const [user,setUser] = useState() 
  const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        password: "",
        repeatPassword: ""
    })
    console.log(profile)

 

 
    const jwt = window.localStorage.getItem("JWT")
    const id = window.localStorage.getItem("id") 
 

    const userFetch = () => {
        fetch(`http://localhost:10003/api/v1/users/${id}`,
        {   headers: {
            "Authorization": `Bearer ${jwt}`
        }
           
        })
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(err => console.error(err))
    }


useEffect(() => {
  userFetch()
},[])

const updateUser = async(profile) => {
  
      fetch(`http://localhost:10003/api/v1/users/current-user`, {
          method:'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${jwt}`
          },
          body: JSON.stringify(profile)
      })
      .then(r => r).then((result)=> {
          if(result){
              setProfile(profile);
              
              localStorage.setItem("user", JSON.stringify(profile));
          }
      })
}

const handleUpdateUser = async(e) => {
  e.preventDefault()
   
}







 

    return (
        <div className="my-profile-inputs">
<Form className="form-input-columns">
        <FormGroup className="left-column">
          <FormLabel className='text-style'>First Name</FormLabel>
          <FormControl type='text' placeholder="John" name='first_name' className="bgd-style" value={profile.first_name} onChange={(e) => {setProfile({...profile, first_name: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl type='email' placeholder='john@smith.com' name='email' className="bgd-style" value={profile.email} onChange={(e) => {setProfile({...profile, email: e.target.value})}} />
          <br />
          <FormLabel className='text-style'>Password</FormLabel>
          <FormControl type='password' placeholder='******' name='password' className="bgd-style" value={profile.password} onChange={(e) => {setProfile({...profile, password: e.target.value})}}/>
          <button className='myprofile-save-button' type='button' onClick={() => updateUser(profile)}>SAVE</button>
        </FormGroup>
        <FormGroup className="right-column">
          <FormLabel className='text-style'>Last Name</FormLabel>
          <FormControl type='text' placeholder='Smith' name='last_name' className="bgd-style" value={profile.last_name} onChange={(e) => {setProfile({...profile, last_name: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>Birthday</FormLabel>
          <FormControl type='date' placeholder="22-12-1999" name='birthday' className="bgd-style" value={profile.birthday} />
          <br />
          <FormLabel className='text-style'>Repeat Password</FormLabel>
          <FormControl type='password' placeholder='******' name='repeatPassword' className="bgd-style" value={profile.password}/>
        </FormGroup>
      </Form>
        </div>
    )
 
}

export default MyProfileForm
