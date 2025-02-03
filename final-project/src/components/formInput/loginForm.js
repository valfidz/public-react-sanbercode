import {React, useState} from "react";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
    let navigate = useNavigate()

    const [inputLogin, setInputLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInputLogin({...inputLogin, [name]: value})
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let { email, password } = inputLogin

        axios.post('https://dev-example.sanbercloud.com/api/login', { email, password })
            .then((result) => {
                console.log("result", result.data)
                let { token, user } = result.data
                Cookies.set('token', token, {expires: 1})
                Cookies.set('user', JSON.stringify(user), {expires: 1})
                navigate('/')
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto my-20">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={inputLogin.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={inputLogin.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}