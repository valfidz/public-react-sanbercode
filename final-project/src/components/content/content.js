import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"

export const Content = () => {
    let navigate = useNavigate()
    const [jobData, setJobData] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const { convertDate, truncateDescription, currencySalary } = useContext(GlobalContext)

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((result) => {
                setJobData([...result.data.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDetail = (event) => {
        const detailId = parseInt(event.target.value)
        const link = `/jobs/${detailId}`

        navigate(link)
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
        <section className="mt-12 mb-12 max-w-screen-lg mx-auto px-4 md:px-8">
            <div>
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Explore The Jobs
                </h1>
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

            <ul className="mt-4 space-y-6">
                {
                    filteredJobs?.length > 0 ? (
                        filteredJobs.map((item, idx) => (
                            <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
                                <div>
                                    <div className="flex flex-col sm:flex-row justify-between">
                                        <div className="flex-1 w-1/4">
                                            <img
                                                src={item.company_image_url}
                                                className="w-full mb-4 sm:mb-2 sm:w-1/2 object-cover object-center shadow-md rounded-xl"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-cyan-600">
                                                {item.company_name} - {item.title}
                                            </h3>
                                            <p className="text-gray-500 mt-2 pr-2">
                                                {truncateDescription(item.job_description, 100)}
                                            </p>
                                            <button type="button" onClick={handleDetail} value={item.id} className="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Detail
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="space-y-4 text-sm sm:mt-0 sm:space-y-2">
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {convertDate(item.created_at)}
                                            </span>
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                                </svg>
                                                {currencySalary(item.salary_min)} - {currencySalary(item.salary_max)}
                                            </span>
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                </svg>
                                                {item.job_tenure}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-8 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                                        <span className="flex items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 11H21V21H3V11ZM5 13V19H7V13H5ZM9 13V19H11V13H9ZM13 13V19H15V13H13ZM17 13V19H19V13H17ZM3 5V9H21V5H3Z" />
                                            </svg>
                                            {item.job_type}
                                        </span>
                                        <span className="flex items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {item.company_city}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="text-center text-gray-500">No jobs found.</li>
                    )
                }
            </ul>
        </section>
    )
}
