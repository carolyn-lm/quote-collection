import React from "react";
import Folder from "./Folder";

function Folders({ folders, isEditMode, openFolder, editFolder, updateFolder, deleteFolder }) {
    return (
        <ul className="list">
            {folders.map((folder) => <Folder key={folder.id} folder={folder} isEditMode={isEditMode} openFolder={openFolder} editFolder={editFolder} updateFolder={updateFolder} deleteFolder={deleteFolder} />)}
        </ul>
    )
}

export default Folders;