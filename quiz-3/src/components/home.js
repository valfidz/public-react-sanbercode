import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
            .then((result) => {
                setData([...result.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const gamePrice = (number) => {
        if (number == 0) {
            return "Free"
        }

        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number)
    }

    const gamePlatform = (android, ios) => {
        if (android == 1 && ios == 0) {
            return "Android"
        }

        if (android == 0 && ios == 1) {
            return "IOS"
        }

        if (android == 1 && ios == 1) {
            return "Android & IOS"
        }

        if (android == 0 && ios == 0) {
            return ""
        }
    }

    const showSize = (number) => {
        if (number < 1000) {
            return number + " MB"
        } else {
            return (number / 1000).toFixed(2) + " GB"
        }
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.slice(0, maxLength) + '...';
    };

    return (
        <>
            <section className="bg-gray-200 p-5">

                <div className="container mx-auto mt-10">
                    <h1 className="text-xl font-bold ">Find your data that you need!</h1>
                </div>

                <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
                    { data !== null && data.map((resData, index) => {
                        return (
                            <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={resData.image_url}
                                    className="w-1/3 bg-cover bg-center bg-landscape object-cover h-full" />
                                <div className="w-2/3 p-4">
                                    <h1 className="text-gray-900 font-bold text-2xl">
                                        {resData.name}
                                    </h1>
                                    <small>{resData.release_year}</small>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {truncateDescription(resData.description, 250)}
                                    </p>
                                    <div className=" item-center mt-2 text-gray-500">
                                        <span>{resData.category}</span>
                                        <span> {showSize(resData.size)}</span>
                                        <span> {gamePlatform(resData.is_android_app, resData.is_ios_app)}</span>
                                    </div>
                                    <div className="flex item-center justify-between mt-3">
                                        <h1 className="text-gray-700 font-bold text-xl">
                                            {gamePrice(resData.price)}
                                        </h1>
                                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                            &#9733; {resData.rating}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </div>

                </section>
        </>
    )
}

export default Home