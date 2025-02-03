
"use client";

import { Table } from "flowbite-react";
import axios from 'axios';
import { useEffect, useState } from "react";

function Tugas11() {
    const [data, setData] = useState(null);
    const [input, setInput] = useState({
        name: "",
        course: "",
        score: 0
    })
    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true || fetchStatus === "true") {
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
                .then((result) => {
                    setData([...result.data])
                })
                .catch((error) => {
                    console.log(error)
                })

            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({...input, name: value})
        }

        if (name === "course") {
            setInput({...input, course: value})
        }

        if (name === "score") {
            setInput({...input, score: value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let { name, course, score } = input
        
        axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
            .then((result) => {
                console.log(result)
                setFetchStatus(true)
            })
            .catch((error) => {
                console.log(error)
            })

        setInput({
            name: "",
            course: "",
            score: 0
        })
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((result) => {
                setFetchStatus(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function indexNilai(nilai) {
        if (nilai >= 80) {
            return "A"
        } else if (nilai >= 70 && nilai < 80) {
            return "B"
        } else if (nilai >= 60 && nilai < 70) {
            return "C"
        } else if (nilai >= 50 && nilai < 60) {
            return "D"
        } else {
            return "E"
        }
    }

  return (
    <>
        <div className="container-lg overflow-x-auto mx-auto max-w-screen-xl mb-16 shadow-lg mt-10">
            <Table>
                <Table.Head>
                    <Table.HeadCell className="bg-indigo-600 text-white">No</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">Nama</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">Mata Kuliah</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">Nilai</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">Index Nilai</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">Action</Table.HeadCell>
                    <Table.HeadCell className="bg-indigo-600 text-white">
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    { data !== null && data.map((resData, index) => {
                        return (
                            <Table.Row key={resData.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-bold">{ index + 1 }</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray dark:text-white">
                                { resData.name }
                                </Table.Cell>
                                <Table.Cell>{ resData.course }</Table.Cell>
                                <Table.Cell>{ resData.score }</Table.Cell>
                                <Table.Cell>{ indexNilai(resData.score) }</Table.Cell>
                                <Table.Cell>
                                    <button onClick={handleDelete} value={resData.id} href="#" className="font-bold hover:underline border-2 rounded-md p-2 bg-red-500 text-white">
                                        Delete
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    }) }
                </Table.Body>
            </Table>
        </div>

        <div className="container-lg overflow-x-auto mx-auto max-w-screen-xl mb-16 shadow-xl py-8 px-8 rounded-md">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input onChange={handleInput} type="text" id="name" name="name" value={input.name} className="rounded-md w-full mb-6 mt-2 bg-slate-100" required /><br />
                <label htmlFor="course">Mata Kuliah:</label><br />
                <input onChange={handleInput} type="text" id="course" name="course" value={input.course} className="rounded-md w-full mb-6 mt-2 bg-slate-100" required /><br />
                <label htmlFor="score">Nilai:</label><br />
                <input onChange={handleInput} type="number" id="score" name="score" value={input.score} className="rounded-md w-full mb-6 mt-2 bg-slate-100" required /><br />
                <input type={"submit"} className="border-2 p-4 rounded-md bg-blue-600 text-white hover:cursor-pointer"/>
            </form>
        </div>
    </>
  );
}

export default Tugas11