import React, { useState, useEffect } from "react";
import 'flowbite';
import axios from "axios";
import Cookies from 'js-cookie'
import { Alert } from "../alert/alert";
import { AlertSuccess } from "../alert/alertSuccess";

export const FormEdit = (props) => {
    const editId = props.editId
    const radios = [
        { label: "Open", value: 1 },
        { label: "Closed", value: 0 }
      ];

    const [inputEdit, setInputEdit] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 1,
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0
    })

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${editId}`)
            .then((result) => {
                console.log("result", result)
                setInputEdit({
                    title: result.data.title,
                    job_description: result.data.job_description,
                    job_qualification: result.data.job_qualification,
                    job_type: result.data.job_type,
                    job_tenure: result.data.job_tenure,
                    job_status: result.data.job_status,
                    company_name: result.data.company_name,
                    company_image_url: result.data.company_image_url,
                    company_city: result.data.company_city,
                    salary_min: result.data.salary_min,
                    salary_max: result.data.salary_max
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [editId])

    const [alert, setAlert] = useState({ show: false, message: "", type: "" });

    const handleinputEdit = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInputEdit({...inputEdit, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = inputEdit

        axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${editId}`, {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        },
        {
            headers: {"Authorization" : "Bearer " + Cookies.get('token')}
        })
        .then((result) => {
            console.log(result)
            setAlert({ show: true, message: "Edit job successful!", type: "success" });
        })
        .catch((error) => {
            console.log(error)
            setAlert({ show: true, message: "Edit job failed", type: "error" });
        })
    }

    return (
        <section className="bg-white dark:bg-gray-900 mt-10">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit a job vacancy</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                            <input
                            type="text"
                            name="title"
                            id="title"
                            value={inputEdit.title}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Job Title . . ."
                            required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company_image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Image</label>
                            <input
                            type="text"
                            name="company_image_url"
                            id="company_image_url"
                            value={inputEdit.company_image_url} onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Insert URL . . ."
                            required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input
                            type="text"
                            name="company_name"
                            id="company_name"
                            value={inputEdit.company_name}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Company Name . . ."
                            required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="salary_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Minimum</label>
                            <input
                            type="number"
                            name="salary_min"
                            id="salary_min"
                            value={inputEdit.salary_min}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Min Salary . . ."
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="company_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input
                            type="text"
                            name="company_city"
                            id="company_city"
                            value={inputEdit.company_city}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Company Location . . ."
                            />
                        </div>
                        <div>
                            <label htmlFor="salary_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Maximum</label>
                            <input
                            type="number"
                            name="salary_max"
                            id="salary_max"
                            value={inputEdit.salary_max}
                            onChange={handleinputEdit} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Max Salary . . ."
                            required
                            />
                        </div> 
                        <div className="sm:col-span-2">
                            <label htmlFor="job_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Type</label>
                            <input
                            type="text"
                            name="job_type"
                            id="job_type"
                            value={inputEdit.job_type}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Example: Onsite/Hybrid/Remote"
                            required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="job_tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Tenure</label>
                            <input
                            type="text"
                            name="job_tenure"
                            id="job_tenure"
                            value={inputEdit.job_tenure}
                            onChange={handleinputEdit}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Example: Contract/Permanent/Intern"
                            required
                            />
                        </div>
                        <div>
                            <h2 className="text-gray-800 font-medium">Job Status</h2>
                            <ul className="mt-3 space-y-3">
                                {
                                    radios.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-2.5">
                                            <input
                                            type="radio"
                                            name="job_status"
                                            id={`job_status-${idx}`}
                                            value={item.value}
                                            checked={inputEdit.job_status === item.value}
                                            onChange={handleinputEdit}
                                            className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150" />
                                            <label htmlFor={`job_status-${idx}`} className="text-sm text-gray-700 font-medium">
                                                {item.label}
                                            </label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                            <textarea
                            name="job_description"
                            id="job_description"
                            value={inputEdit.job_description}
                            onChange={handleinputEdit}
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="inputEdit your job description . . ."
                            ></textarea>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="job_qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Qualification</label>
                            <textarea
                            name="job_qualification"
                            id="job_qualification"
                            value={inputEdit.job_qualification}
                            onChange={handleinputEdit}
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="inputEdit your job qualification . . ."
                            ></textarea>
                        </div>
                    </div>
                    {alert.show && alert.type === "success" && <AlertSuccess message={alert.message} />}
                    {alert.show && alert.type === "error" && <Alert message={alert.message} />}
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-blue-500">
                        Edit job
                    </button>
                </form>
            </div>
        </section>
    )
}