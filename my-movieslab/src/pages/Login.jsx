import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../components/Context/AuthContext';

const Login = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('')
  const [error , setError] = useState('');
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSummit = async (e)=> {
e.preventDefault();
setError('')
try {
  await logIn(email, password)
  navigate('/')
} catch (error) {
  console.log(error);
  setError(error.message)
   }
};

  return (
    <div>
        <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src='https://wallpaperaccess.com/full/329622.jpg' alt='/'/>
    
      <div className=' fixed w-full px-4 py-24 z-50'>
         <div className=' max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
            <div className=' max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold '>Sign In</h1> 
                {error? <p className=' p-3 bg-red-500 my-2 text-black'>Error. Wrong password or email</p>: null}
                <form onSubmit={ handleSummit} className='w-full flex flex-col py-4'>
                  <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type='emil' placeholder='Email'/>
                  <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className=' flex justify-between items-center text-sm text-gray-600'>
                      <p><input className='mr-2' type='checkbox' />Remember me</p>
                      <p>Need Help?</p>
                    </div>
                    <p className='py-4 '><span className=' text-gray-600'>
                    New to FILM FRAME?
                    </span>{' '}
                    <Link to='/signup'> Sign Up</Link>
                    </p>
                </form>
            </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Login