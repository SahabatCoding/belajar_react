import { StrictMode } from "react";
import ProfileApp from "./ProfileApp";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ProfileApp/>
        </StrictMode>
    )