import React from "react";
import ReactDOM from "react-dom/client";
import { Hello } from "./Hello";

// taken the div with the id "root" from the index.html
const root = ReactDOM.createRoot(document.getElementById('root'))

// Adding components
root.render(
    <>
        <Hello />
    </>
)
