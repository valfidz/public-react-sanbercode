import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { ContentDashboard } from "../../components/content/contentDashboard";

export const Dashboard = (props) => {

    return (
        <>
            <Sidebar childComponent={<ContentDashboard />}/>
        </>
    )
}