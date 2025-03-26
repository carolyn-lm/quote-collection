import React from "react";
import { COLOR_NAMES, getTextColor } from "./ColorList";


//One color list item
function ColorOption({ color, updateFolderColor }) {
    //Display names have spaces, remove those when setting color
    const colorName = color.replace(/\s/g, "");

    return (
        <li className="color-option" style={{ backgroundColor: colorName, color: getTextColor(colorName) }} onClick={(e) => updateFolderColor(colorName)}>
            {color}</li>
    )
}

//List of ColorOptions
function ColorPicker({ updateFolderColor }) {

    return (
        <ul className="color-options">
            {COLOR_NAMES.map(color => <ColorOption key={color} color={color} updateFolderColor={updateFolderColor} />)}
        </ul>
    )
}

export default ColorPicker;