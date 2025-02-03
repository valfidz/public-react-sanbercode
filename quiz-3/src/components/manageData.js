import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageData = () => {
    const [database, setDatabase] = useState(null);
    const [input, setInput] = useState({
        name: "",
        image_url: "",
        category: "",
        description: "",
        price: 0,
        rating: 0,
        release_year: 2009,
        size: 0,
        is_android_app: 0,
        is_ios_app: 0
    })
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentid, setCurrentId] = useState(-1)

    useEffect(() => {
        if (fetchStatus === true || fetchStatus === "true") {
            axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
                .then((result) => {
                    setDatabase([...result.data])
                })
                .catch((error) => {
                    console.log(error)
                })

            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.type === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value

        if (name === "name") {
            setInput({...input, name: value})
        }

        if (name === "image_url") {
            setInput({...input, image_url: value})
        }

        if (name === "category") {
            setInput({...input, category: value})
        }

        if (name === "description") {
            setInput({...input, description: value})
        }

        if (name === "price") {
            setInput({...input, price: value})
        }

        if (name === "rating") {
            setInput({...input, rating: value})
        }

        if (name === "release_year") {
            setInput({...input, release_year: value})
        }

        if (name === "size") {
            setInput({...input, size: value})
        }

        if (name === "is_android_app") {
            setInput({...input, is_android_app: value})
        }

        if (name === "is_ios_app") {
            setInput({...input, is_ios_app: value})
        }
    }

    const handleDelete = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
            .then((result) => {
                setFetchStatus(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {
            name,
            image_url,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app
        } = input
        
        if (currentid == -1) {
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', {
                name,
                image_url,
                category,
                description,
                price,
                rating,
                release_year,
                size,
                is_android_app,
                is_ios_app
            })
                .then((result) => {
                    console.log(result)
                    setFetchStatus(true)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentid}`, {
                name,
                image_url,
                category,
                description,
                price,
                rating,
                release_year,
                size,
                is_android_app,
                is_ios_app
            })
            .then((result) => {
                setFetchStatus(true)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        setCurrentId(-1)

        setInput({
            name: "",
            image_url: "",
            category: "",
            description: "",
            price: 0,
            rating: 0,
            release_year: 0,
            size: 0,
            is_android_app: 0,
            is_ios_app: 0
        })
    }

    const handleEdit = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        setCurrentId(ID_MOBILE_APPS)

        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
            .then((result) => {
                let editData = result.data

                setInput({
                    name: editData.name,
                    image_url: editData.image_url,
                    category: editData.category,
                    description: editData.description,
                    price: editData.price,
                    rating: editData.rating,
                    release_year: editData.release_year,
                    size: editData.size,
                    is_android_app: editData.is_android_app,
                    is_ios_app: editData.is_ios_app
                })
            })
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.slice(0, maxLength) + '...';
    };

    return (
        <>
            <div className="overflow-x-auto container flex flex-wrap justify-between items-center mx-auto mt-10 shadow-lg rounded-md">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">No</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Category</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Description</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Price</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Rating</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Release Year</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Size</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">IS_ANDROID_APP</th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">IS_IOS_APP</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        { database !== null && database.map((resData, index) => {
                            return (
                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{index + 1}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.category}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{truncateDescription(resData.description, 20)}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.rating}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.release_year}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.size}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.is_android_app}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{resData.is_ios_app}</td>
                                        <td className="whitespace-nowrap px-4 py-2">
                                        <button
                                            onClick={handleEdit}
                                            value={resData.id}
                                            className="inline-block rounded bg-yellow-500 px-4 py-2 mr-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={handleDelete}
                                            value={resData.id}
                                            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto container px-10 py-10 mx-auto mt-10 mb-20 shadow-lg rounded-md">
                <h2>Input Data</h2>
                <form onSubmit={handleSubmit} className="mt-8">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700"> Name </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter game name . . ."
                    value={input.name}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <label htmlFor="image_url" className="block text-xs font-medium text-gray-700 mt-6"> Image URL </label>
                    <input
                    type="text"
                    name="image_url"
                    id="image_url"
                    placeholder="Enter image Url . . ."
                    value={input.image_url}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <label htmlFor="category" className="block text-xs font-medium text-gray-700 mt-6"> Category </label>
                    <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Enter category . . ."
                    value={input.category}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <label htmlFor="description" className="block text-xs font-medium text-gray-700 mt-6"> Description </label>
                    <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter description . . ."
                    value={input.description}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <label htmlFor="price" className="block text-xs font-medium text-gray-700 mt-6"> Price </label>
                    <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter price . . ."
                    value={input.price}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <label htmlFor="rating" className="block text-xs font-medium text-gray-700 mt-6"> Rating </label>
                    <input
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder="Enter rating . . ."
                    value={input.rating}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    min={0}
                    max={5}
                    required
                    />

                    <label htmlFor="release_year" className="block text-xs font-medium text-gray-700 mt-6"> Release Year </label>
                    <input
                    type="number"
                    name="release_year"
                    id="release_year"
                    placeholder="Enter release year . . ."
                    value={input.release_year}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    min={2009}
                    max={2024}
                    required
                    />

                    <label htmlFor="size" className="block text-xs font-medium text-gray-700 mt-6"> Size </label>
                    <input
                    type="number"
                    name="size"
                    id="size"
                    placeholder="Enter release year . . ."
                    value={input.size}
                    onChange={handleInput}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    required
                    />

                    <fieldset className="mt-6">
                        <legend className="block text-xs font-medium text-gray-700">Platform Game</legend>

                        <div className="mt-4 space-y-2">
                            <label htmlFor="is_android_app" className="flex cursor-pointer items-start gap-4">
                            <div className="flex items-center">
                                &#8203;
                                <input
                                    type="checkbox"
                                    name="is_android_app"
                                    className="size-4 rounded border-gray-300"
                                    id="is_android_app"
                                    checked={input.is_android_app === 1}
                                    onChange={handleInput}
                                 />
                            </div>

                            <div>
                                <strong className="sm:text-sm font-normal"> Android </strong>
                            </div>
                            </label>

                            <label htmlFor="is_ios_app" className="flex cursor-pointer items-start gap-4">
                            <div className="flex items-center">
                                &#8203;
                                <input
                                    type="checkbox"
                                    name="is_ios_app"
                                    className="size-4 rounded border-gray-300"
                                    id="is_ios_app"
                                    checked={input.is_ios_app === 1}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <strong className="sm:text-sm font-normal"> IOS </strong>
                            </div>
                            </label>
                        </div>
                    </fieldset>

                    <input type={"submit"} className="border-2 py-2 px-4 rounded-md bg-blue-600 mt-8 text-white hover:cursor-pointer"/>
                </form>
            </div>
        </>
    )
}

export default ManageData