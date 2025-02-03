import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FormEdit } from "../../components/formInput/formEdit";
import 'flowbite'
import { useParams } from "react-router-dom";

export const JobEditForm = (props) => {
    const { id } = useParams()
    return (
        <>
            <Sidebar childComponent={<FormEdit editId={id} />}/>
        </>
    )
}