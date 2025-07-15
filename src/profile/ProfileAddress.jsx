import { useContext } from "react";
import { ProfileContext } from "./ProfileCintext";

export default function ProfileAddress(){
    const profile = useContext(ProfileContext)
    console.log()
    return (
        <>
            <h2>Profile Address</h2>
            <p>Alamat {profile}</p>
        </>
    )
}