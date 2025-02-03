import React from "react"
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"

export const ContentTableJob = () => {
    let navigate = useNavigate()
    const [jobData, setJobData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const { currencySalary, truncateDescription } = useContext(GlobalContext)

    useEffect(() => {
        if (fetchStatus === true || fetchStatus === "true") {
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
                .then((result) => {
                    setJobData([...result.data.data])
                })
                .catch((error) => {
                    console.log(error)
                })

            setFetchStatus(false)
        }
    }, [[fetchStatus, setFetchStatus]])

    if (jobData == null) {
        return <div>Data not available</div>
    }

    const jobStatus = (status) => {
        if (status == 1) {
            return "Open"
        } else {
            return "Closed"
        }
    }

    const handleEdit = (event) => {
        const editId = parseInt(event.target.value)
        const link = `/dashboard/list-job-vacancy/form/${editId}`

        navigate(link)
    }

    const handleDelete = (event) => {
        let dataId = parseInt(event.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${dataId}`,
            {headers: {"Authorization" : "Bearer " + Cookies.get('token')}}
        )
        .then((result) => {
            console.log(result)
            setFetchStatus(true)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredJobs = jobData?.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_city.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="max-w-screen-xl mt-20 mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        All Jobs
                    </h3>
                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        to="/dashboard/list-job-vacancy/form"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add Job
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex justify-between">
                <input
                    type="text"
                    placeholder="Find Jobs by title/company name/city"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-3 py-2.5 text-gray-400 focus:bg-gray-200 duration-150 outline-none rounded-lg shadow sm:max-w-3/4"
                />
                {/* <button type="submit" className="ml-4 gap-x-2 py-2.5 px-4 mt-3 text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">Find</button> */}
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full overflow-auto table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">Title</th>
                            <th className="py-3 pr-6">Job Desc</th>
                            <th className="py-3 pr-6">Job Status</th>
                            <th className="py-3 pr-6">Qualification</th>
                            <th className="py-3 pr-6">Job Type</th>
                            <th className="py-3 pr-6">Job Tenure</th>
                            <th className="py-3 pr-6">Company Name</th>
                            <th className="py-3 pr-6">Company City</th>
                            <th className="py-3 pr-6">Company Image</th>
                            <th className="py-3 pr-6">Salary Min</th>
                            <th className="py-3 pr-6">Salary Max</th>
                            <th className="py-3 pr-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            filteredJobs?.length > 0 ? (
                                filteredJobs.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.title}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{truncateDescription(item.job_description, 20)}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.job_status == 1 ? "text-green-600 bg-green-50" : "text-red-600 bg-blue-50"}`}>
                                                {jobStatus(item.job_status)}
                                            </span>
                                        </td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{truncateDescription(item.job_qualification, 20)}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.job_type}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.job_tenure}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.company_name}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{item.company_city}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{truncateDescription(item.company_image_url, 20)}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{currencySalary(item.salary_min)}</td>
                                        <td className="pr-6 py-4 whitespace-nowrap">{currencySalary(item.salary_max)}</td>
                                        <td className="text-right whitespace-nowrap">
                                            <button onClick={handleEdit} value={item.id} className="py-1.5 px-3 mr-2 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 bg-yellow-200 border rounded-lg">
                                                Edit
                                            </button>
                                            <button onClick={handleDelete} value={item.id} className="py-1.5 px-3 text-white hover:text-gray-500 duration-150 bg-red-600 hover:bg-gray-50 border rounded-lg">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <li className="text-center text-gray-500">No jobs found.</li>
                            ) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}