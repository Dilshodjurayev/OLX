import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { auth , provider } from '../../../firebase/firebaseconfig'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import instance from '../../../api/instance'

function Create() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [formData ,setFormData] = useState({
    email:"",
    password:"",
    name:"",
    avatar:""
  })
  const createAccountWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  const createUserWithEmail = (e) => {
    e.preventDefault()
    instance.post("/users" , formData)
      .then(response => {
        if(response.data.email){
          //sent to store
          dispatch({email: response.data.email , type: "CREATE_USER"})
          history.push("/")
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='auth-create'>
      <button onClick={createAccountWithGoogle} className='auth-google-btn'><FcGoogle/> Google bilan hisob yaratish</button>
      <form className='auth-form' onSubmit={createUserWithEmail}>
        <input type="text" placeholder='Name' onChange={e => setFormData({...formData ,name:e.target.value})} />
        <input type="url" placeholder='Avatar' onChange={e => setFormData({...formData ,avatar:e.target.value})} />
        <input type="text" placeholder='Email' onChange={e => setFormData({...formData ,email:e.target.value})} />
        <input type="password" placeholder='Password' onChange={e => setFormData({...formData ,password:e.target.value})} />
        <button type='submit'>Xisob yaratish</button>
      </form>
    </div>
  )
}

export default Create
