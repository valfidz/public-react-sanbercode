import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FormCreate } from "../../components/formInput/formCreate";
import 'flowbite'

export const JobCreateForm = (props) => {

    return (
        <>
            <Sidebar childComponent={<FormCreate />}/>
        </>
    )
}