import React, { useEffect, useState } from 'react'
import '../../styles/my-profile.css'
import {Form,FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import lego_profile from '../../assets/img/lego_profile.png'



const MyProfile = () => {


    const [user,setUser] = useState() 
    const [profile, setProfile] = useState({
          first_name: "",
          last_name: "",
          email: "",
          birthday: "",
          password: "",
          repeatPassword: "",
          img: ""
      })
      console.log(profile)

      const [file, setFile] = useState(null);
const[image, setImage] = useState(null);
const convertBinaryImage = (e) => {
    if(!e.target.files[0]) return;
    setProfile({...profile, img: ''})

    setFile(e.target.files[0])
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    let bin = null

    reader.onload = function() {
      bin = reader.result
      setImage(bin);
    }       
    reader.onerror = function() {
      bin = null
    }
  }

      

      const uploadImage = (img, token) => {
         return fetch(`http://localhost:10002/api/v1/storage`,{
             method:'POST',
             headers:{
                'Authorization':`Bearer ${token}`
             },
             body:img
         })
         .then(res => {
             return res.json()
         })
     }

     
      const uploadFile = async () => {
          if(!file){
            updateUser(profile)
            return;
          }
        let formData = new FormData();
        formData.append('document', file);

       await uploadImage(formData, jwt)
            .then(res => {
              updateUser({...profile, img:res.filename});
            })
            .catch(err => {
                console.log(err);
            });
      }
   
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
    uploadFile()
     
  }

  
    return (
        <div>
             <div className="my-profile-container">
        <div className="div-title-line">
            <h3 className="my-profile-title">My Profile</h3> <hr id="MyProfile-line" />
        </div>


        <div className="my-profile-img-button">
                <div id="lego-logo">
                <img src={profile.img ? `http://localhost:10002/api/v1/storage/${profile.img}` : image || lego_profile} alt="lego logo" id="lego-img"></img>

                <div>
                {/* <button className="change-avatar-button">CHANGE AVATAR</button> */}
                <label for="recipe-image-btn" className="img-btn-label">Upload Image</label>
                <input type="file" id="recipe-image-btn" onChange={(e) => convertBinaryImage(e)} hidden/>

            </div>
                </div>

                <div className="my-profile-inputs">
<Form onSubmit={handleUpdateUser} className="form-input-columns">
        <FormGroup className="left-column">
          <FormLabel className='text-style'>First Name</FormLabel>
          <FormControl type='text' placeholder="John" name='first_name' className="bgd-style" value={profile.first_name} onChange={(e) => {setProfile({...profile, first_name: e.target.value})}}/>
          <br />
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl type='email' placeholder='john@smith.com' name='email' className="bgd-style" value={profile.email} onChange={(e) => {setProfile({...profile, email: e.target.value})}} />
          <br />
          <FormLabel className='text-style'>Password</FormLabel>
          <FormControl type='password' placeholder='******' name='password' className="bgd-style" value={profile.password} onChange={(e) => {setProfile({...profile, password: e.target.value})}}/>
          <input className='myprofile-save-button' type='submit' value="save"/>
            
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

            </div>

</div>
        </div>
    )
}

export default MyProfile



// http://localhost:10003/api/v1/users/:id