import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { ChangePassForm } from "../../components/formInput/changePassForm";

export const ChangePass = (props) => {

    return (
        <>
            <Sidebar childComponent={<ChangePassForm />} />
        </>
    )
}