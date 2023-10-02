import Register from '../../assets/register.jpg'
import React, { useEffect, useRef } from 'react'
import { useSelector, useStore } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const notify = () =>
    toast.success('Login Successful!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  const handleLogin = (e) => {
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    e.preventDefault()
    if (data.email === 'admin@gmail.com' && data.password === 'admin') {
      localStorage.setItem('admin_token', 'admin')
      navigate('/')
    } else {
      alert('Invalid credentials')
    }

    e.target.reset()
  }
  useEffect(() => {
    const token = localStorage.getItem('admin_token')
      ? localStorage.getItem('admin_token')
      : ''
    if (token !== '') {
      navigate('/')
    }
  }, [])

  return (
    <div
      className={`signup bg-cover bg-no-repeat w-full h-full backdrop-blur-md`}
    >
      <div className="relative w-full h-full bg-black/75 flex justify-center items-center  pt-20">
        <div className="text-white flex bg-white absolute w-[60%] h-[70%]  items-center  p-10">
          <img
            src={Register}
            alt="img"
            className="w-[50%] h-full border rounded-3xl"
          />
          <div>
            <form className="px-10" onSubmit={handleLogin}>
              <h1 className="text-black text-2xl font-bold">Welcome back</h1>
              <p className="text-black">Sign in to continue</p>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-md mt-3 uppercase text-xs font-medium"
              >
                Login in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
