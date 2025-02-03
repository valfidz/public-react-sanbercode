
"use client";

import { Table } from "flowbite-react";
import axios from 'axios';
import { useEffect, useState } from "react";

function Tugas10() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((result) => {
                setData([...result.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

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
                        </Table.Row>
                    )
                }) }
            </Table.Body>
        </Table>
        </div>
    </>
  );
}

export default Tugas10