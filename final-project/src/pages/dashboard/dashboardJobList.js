import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { ContentTableJob } from "../../components/content/contentTableJob";
import 'flowbite'

export const DashboardJobList = (props) => {

    return (
        <>
            <Sidebar childComponent={<ContentTableJob />}/>
        </>
    )
}