import React from "react";
import 'flowbite'
import { ProfileComponent } from "../../components/profile/profile";
import Sidebar from "../../components/sidebar/sidebar";

export const Profile = () => {
    return (
        <>
            <Sidebar childComponent={<ProfileComponent />} />
        </>
    )
}