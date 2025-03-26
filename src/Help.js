import React from "react";

//Display help text to explain App and buttons
function Help({ headerText }) {
    return (
        <div>
            <h2>{headerText === "Quote Collection" ? "On this page you can create groups or folders for your quotes. Click on a folder to add quotes to it and change the color"
                : "On this page you can add and view quotes for this folder. You can click on a folder to mark it as reviewed. It will dim and move to the end of the list."}</h2>
            <p><i className="fa-solid fa-plus"></i> Add new {headerText === "Quote Collection" ? "Folder" : "Quote"}</p>
            <p><i className="fa-solid fa-pencil"></i> Edit or delete {headerText === "Quote Collection" ? "Folders" : "Quotes"} </p>
            <p><i className="fa-solid fa-check"></i> Done with edit mode {headerText !== "Quote Collection" && "or color selection"}</p>
            {headerText !== "Quote Collection" && <p><i className="fa-solid fa-palette"></i> Select color for this folder</p>}
            {headerText !== "Quote Collection" && <p><i className="fa-solid fa-arrow-left"></i> Back to all folders</p>}
            {headerText !== "Quote Collection" && <p><i className="fa-solid fa-rotate-left"></i> Reset reviewed state for all quotes in this folder </p>}
        </div>
    )
}

export default Help;