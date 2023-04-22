import React,{useState} from 'react'
import { FaUserAlt } from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
import {FaEyeSlash} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import PasswordRequirements from './PasswordRequirements'

function Register(props) {
  const [formData,setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:''
  })

  const [passwordRequirements,setPasswordRequirements]= useState(false)
  const [checks,setChecks] = useState({
    capsLetterCheck:false,
    numberCheck:false,
    lengthCheck:false
  })

  function handleChange(event) {
    const{name,value} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    }
    )
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  function onFocus () {
    setPasswordRequirements(true)
  }

  function onBlur () {
    setPasswordRequirements(false)
  }
  
  const onKeyUp = (e) => {
    const {value} = e.target
    const capsLetterCheck = /[A-Z]/.test(value)
    const numberCheck = /[0-9]/.test(value)
    const lengthCheck = value.length >= 8
    setChecks({
      capsLetterCheck,
      numberCheck,
      lengthCheck
    })
  }

  const [text, setText] = React.useState("Show");
  const [visible, setVisible] = React.useState("password");
  const icon =
    visible === "password" ? <FaEye size={20}/> : <FaEyeSlash size={20}/>;
  const visibility = () => {
    setVisible((visible) => (visible === "password" ? "text" : "password"));
    setText((text) => (text === "Show" ? "Hide" : "Show"));
  };

  return (
    <div className='flex flex-col rounded-lg gap-3 bg-light-gray w-2/6 h-1/3 justify-center items-center mb-10'>
      <p className='text-4xl pt-5'>Create an Account</p>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div>
          <label htmlFor="firstname">Firstname *</label>
          <div className='flex items-center'>
            <FaUserAlt size={20} className='absolute ml-4'/>
            <input
              className='bg-gray-200 p-2 w-72 pl-12 rounded-lg'
              type="text"
              placeholder='Enter Firstname'
              name='firstname'
              value={formData.firstname}
              onChange={handleChange} 
              required
              />
            </div>
          </div>
          <div>
          <label htmlFor="lastname">Lastname *</label>
          <div className='flex items-center'>
            <FaUserAlt size={20} className='absolute ml-4'/>
            <input
              className='bg-gray-200 p-2 w-72 pl-12 rounded-lg'
              type="text"
              placeholder='Enter Lastname'
              name='lastname'
              value={formData.lastname}
              onChange={handleChange}
              required  
              />
            </div>
          </div>
          <div>
          <label htmlFor="email">Email *</label>
          <div className='flex items-center'>
            <MdEmail size={20} className='absolute ml-4'/>
            <input
              className='bg-gray-200 p-2 w-72 pl-12 rounded-lg'
              type="email"
              placeholder='Enter Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required  
              />
            </div>
          </div>
          <div>
          <label htmlFor="username">Username *</label>
          <div className='flex items-center'>
            <FaUserAlt size={20} className='absolute ml-4'/>
            <input
              className='bg-gray-200 p-2 w-72 pl-12 rounded-lg'
              type="text"
              placeholder='Enter Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required  
              />
            </div>
          </div>
          <div>
          <label htmlFor="password">Password *</label>
          <div className='flex items-center'>
            <input 
              className='bg-gray-200 p-2 w-72 pl-12 rounded-lg'
              type={visible}
              placeholder='Enter password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyUp={onKeyUp} 
              pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
              required 
              />
              <div onClick={() => visibility()} className='absolute ml-3 transition ease-out duration-500 cursor-pointer hover:bg-slate-400 rounded-full p-1'>{icon}</div>
          </div>
          </div>
          <div>
              {passwordRequirements ? (
                <PasswordRequirements 
                capsLetterValid={checks.capsLetterCheck ? 'text-[green]' : 'text-[red]'}
                numberCheckValid={checks.numberCheck ? 'text-[green]' : 'text-[red]'}
                lengthCheckValid={checks.lengthCheck ? 'text-[green]' : 'text-[red]'}
                />
                )
              : null}
            </div>
        <div className='flex gap-5 justify-center'>
         <button type='submit' className='bg-blue-500 py-2 text-white rounded-md px-5 transition ease-out duration-500 hover:bg-blue-700'>SIGNUP</button>
        </div>
      </form>
      <div className='flex pb-4'>
        <p className='py-2'>Already have an account? </p>
        <button onClick={() => props.toggleForm('login')} className='text-blue-600 transition ease-out duration-500 hover:bg-slate-300 rounded-md p-1'>LOG IN</button>
      </div>
    </div>
  )
}

export default Register
