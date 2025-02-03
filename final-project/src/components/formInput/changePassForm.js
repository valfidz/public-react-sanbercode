import { React, useState } from "react"
import { Alert } from "../alert/alert"
import { AlertSuccess } from "../alert/alertSuccess"
import axios from "axios"
import 'flowbite'
import Cookies from 'js-cookie'

export const ChangePassForm = (props) => {
    const [inputChangePass, setInputChangePass] = useState({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    })
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInputChangePass({...inputChangePass, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            current_password,
            new_password,
            new_confirm_password
        } = inputChangePass

        if (new_password !== new_confirm_password) {
            setAlert({ show: true, message: "Password does not match", type: "error" });
            return;
        }

        if (new_password.length < 8) {
            setAlert({ show: true, message: "Password must be more than 8 characters", type: "error" });
            return;
        }

        axios.post('https://dev-example.sanbercloud.com/api/change-password', {
            current_password,
            new_password,
            new_confirm_password
        }, 
        {
            headers: {"Authorization" : "Bearer " + Cookies.get('token')}
        })
        .then((result) => {
            console.log(result)
            setAlert({ show: true, message: "Change Password Successful!", type: "success" });
        })
        .catch((error) => {
            console.log(error)
            setAlert({ show: true, message: "Change Password Failed", type: "error" });
        })

        setInputChangePass({
            current_password: "",
            new_password: "",
            new_confirm_password: ""
        })
    }

    return (  
        <>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-20">
                <div className="mb-5">
                    <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
                    <input
                        name="current_password"
                        type="password"
                        id="current_password"
                        onChange={handleChange}
                        value={inputChangePass.current_password}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                    <input
                        name="new_password"
                        type="password"
                        id="new_password"
                        onChange={handleChange}
                        value={inputChangePass.new_password}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat new password</label>
                    <input
                        name="new_confirm_password"
                        type="password"
                        id="new_confirm_password"
                        onChange={handleChange}
                        value={inputChangePass.new_confirm_password}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                {alert.show && alert.type === "success" && <AlertSuccess message={alert.message} />}
                {alert.show && alert.type === "error" && <Alert message={alert.message} />}
                <button type="submit" className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
            </form>
        </>
        
    )
}