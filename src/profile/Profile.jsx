import { useContext } from "react";
import { ProfileContext } from "./ProfileCintext";

export default function Profile(){
    const profile = useContext(ProfileContext)

    return (
        <>
            <h2>Profile</h2>
            <p>Hello {profile}</p>
        </>
    )
}