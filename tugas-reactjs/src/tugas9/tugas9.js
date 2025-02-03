
"use client";

import { Table } from "flowbite-react";

function Tugas9() {
  return (
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="font-bold">1</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray dark:text-white">
              {'John'}
            </Table.Cell>
            <Table.Cell>Algoritma</Table.Cell>
            <Table.Cell>80</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-bold text-cyan-600 hover:underline dark:text-cyan-500 mr-3 border-2 rounded-md p-2">
                Edit
              </a>
              <a href="#" className="font-bold hover:underline border-2 rounded-md p-2 bg-red-500 text-white">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="font-bold">2</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray dark:text-white">
              Doe
            </Table.Cell>
            <Table.Cell>Matematika</Table.Cell>
            <Table.Cell>70</Table.Cell>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-bold text-cyan-600 hover:underline dark:text-cyan-500 mr-3 border-2 rounded-md p-2">
                Edit
              </a>
              <a href="#" className="font-bold hover:underline border-2 rounded-md p-2 bg-red-500 text-white">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="font-bold">3</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray dark:text-white">Frank</Table.Cell>
            <Table.Cell>Kalkulus</Table.Cell>
            <Table.Cell>60</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-bold text-cyan-600 hover:underline dark:text-cyan-500 mr-3 border-2 rounded-md p-2">
                Edit
              </a>
              <a href="#" className="font-bold hover:underline border-2 rounded-md p-2 bg-red-500 text-white">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="font-bold">4</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray dark:text-white">Jason</Table.Cell>
            <Table.Cell>Basis Data</Table.Cell>
            <Table.Cell>90</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-bold text-cyan-600 hover:underline dark:text-cyan-500 mr-3 border-2 rounded-md p-2">
                Edit
              </a>
              <a href="#" className="font-bold hover:underline border-2 rounded-md p-2 bg-red-500 text-white">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Tugas9