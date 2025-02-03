import { React, useState } from "react"
import { Alert } from "../alert/alert"
import { AlertSuccess } from "../alert/alertSuccess"
import axios from "axios"
import 'flowbite'

export const RegisForm = (props) => {
    const [inputRegis, setInputRegis] = useState({
        name: "",
        email: "",
        password: "",
        image_url: "",
        repeat_password: ""
    })
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInputRegis({...inputRegis, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            email,
            password,
            image_url,
            repeat_password
        } = inputRegis

        if (password !== repeat_password) {
            setAlert({ show: true, message: "Password does not match", type: "error" });
            return;
        }

        if (password.length < 8) {
            setAlert({ show: true, message: "Password must be more than 8 characters", type: "error" });
            return;
        }

        axios.post('https://dev-example.sanbercloud.com/api/register', {
            name,
            email,
            password,
            image_url
        })
        .then((result) => {
            console.log(result)
            setAlert({ show: true, message: "Registration successful!", type: "success" });
        })
        .catch((error) => {
            console.log(error)
            setAlert({ show: true, message: "Registration failed", type: "error" });
        })

        setInputRegis({
            name: "",
            email: "",
            password: "",
            image_url: "",
            repeat_password: ""
        })
    }

    return (  
        <>
            {alert.show && alert.type === "success" && <AlertSuccess message={alert.message} />}
            {alert.show && alert.type === "error" && <Alert message={alert.message} />}
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-20">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={inputRegis.name}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insert image</label>
                    <input
                        name="image_url"
                        type="text"
                        id="image_url"
                        onChange={handleChange}
                        value={inputRegis.image_url}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="https://picture.example.com/picture/profile.jpg"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={inputRegis.email}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={inputRegis.password}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        name="repeat_password"
                        type="password"
                        id="repeat_password"
                        onChange={handleChange}
                        value={inputRegis.repeat_password}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </>
        
    )
}