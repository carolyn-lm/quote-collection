import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

// Header has header text and buttons
function Header({ headerText, addFolder, isEditMode, toggleEdit, updateFolderColor, closeFolder, addQuote, resetReviewed, toggleHelp }) {
    const [showColor, setShowColor] = useState(false);

    const addNewItem = () => {
        if (headerText === "Quote Collection") {
            addFolder();
        } else {
            addQuote();
        }
    }

    const backToFolders = () => {
        //make sure colors are hidden before go back
        setShowColor(false);
        closeFolder();
    }


    return (
        <header>
            <h1>{headerText}</h1>
            <div className="button-container">
                {/* Add new item */}
                <p className="header-button" onClick={addNewItem}><i className="fa-solid fa-plus"></i></p>
                {/* Edit items */}
                <p className="header-button" onClick={() => toggleEdit()}>{isEditMode ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-pencil"></i>}</p>
                {/* Change color - only when in specific folder */}
                {headerText !== "Quote Collection" && <p className="header-button" onClick={() => setShowColor(!showColor)}>
                    {showColor ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-palette"></i>}</p>
                }
                {/* Back button - only when in specific folder */}
                {
                    headerText !== "Quote Collection" && <p className="header-button" onClick={backToFolders}><i className="fa-solid fa-arrow-left"></i></p>
                }
                {/* Reset button - only when in specific folder */}
                {
                    headerText !== "Quote Collection" && <p className="header-button" onClick={() => resetReviewed()}><i className="fa-solid fa-rotate-left"></i></p>
                }
                {/* Help button */}
                <p className="header-button" onClick={() => toggleHelp()}><i className="fa-solid fa-question"></i></p>
            </div>
            {showColor && <ColorPicker updateFolderColor={updateFolderColor} />}
        </header>
    )
}

export default Header;