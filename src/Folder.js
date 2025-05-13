import React from "react";
import { getTextColor } from "./ColorList";


function Folder({ folder, isEditMode, openFolder, editFolder, updateFolder, deleteFolder, }) {
    const updateFolderName = (e) => {
        updateFolder(folder.id, "name", e.target.value);
    }

    return (
        <li className="folder"
            style={{ backgroundColor: folder.color, color: getTextColor(folder.color) }}>
            {folder.inEditMode || isEditMode ?
                (
                    <div className="wrapper">
                        <i className="fa-regular fa-trash-can" onClick={() => deleteFolder(folder.id)}></i>
                        <input type="text" className="folder_name" value={folder.name} placeholder="Folder Name" onChange={updateFolderName} />
                        <button onClick={() => editFolder(folder.id)}>Done</button>
                    </div>
                ) :
                (<div className="wrapper" onClick={() => openFolder(folder.id)}>
                    <p className="folder_name">{folder.name}</p>
                </div>)}

        </li>
    )
}

export default Folder;
