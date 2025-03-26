// List of colors used by ColorPicker
export const COLOR_NAMES = [
    // red
    "Orange Red",
    "Tomato",
    "Crimson",

    // orange
    "Peach Puff",
    "Light Salmon",
    "Dark Salmon",
    "Salmon",
    "Light Coral",
    "Coral",
    "Orange",
    "Dark orange",

    // yellow
    "Lemon Chiffon",
    "Gold",
    "Golden Rod",

    // green
    "Light Green",
    "Medium Spring Green",
    "Lime Green",
    "Medium Sea Green",
    "Dark Sea Green",
    "Sea Green",
    "Yellow Green",
    "Olive Drab",
    "Forest Green",

    //aqua
    "Aquamarine",
    "Medium Aqua Marine",
    "Light Sea Green",
    "Aqua",
    "Pale Turquoise",
    "Medium Turquoise",
    "Turquoise",
    "Dark Turquoise",
    "Light Cyan",
    "Dark Cyan",
    "Teal",

    // blue
    "Cadet Blue",
    "Light Blue",
    "Light Steel Blue",
    "Light Sky Blue",
    "Powder Blue",
    "Sky Blue",
    "Deep Sky Blue",
    "Dodger Blue",
    "Royal Blue",
    "Cornflower Blue",
    "Slate Blue",
    "Medium Slate Blue",
    "Steel Blue",
    "Medium Blue",
    "Dark Slate Blue",
    "Dark Blue",
    "Navy",
    "Midnight Blue",

    // purple
    "Lavender",
    "Thistle",
    "Plum",
    "Orchid",
    "Medium Orchid",
    "Medium Purple",
    "Dark Orchid",
    "Blue Violet",
    "Dark Violet",
    "Purple",
    "Indigo",

    // pink
    "Lavender Blush",
    "Misty Rose",
    "Light Pink",
    "Pink",
    "Pale Violet Red",
    "Medium Violet Red",
    "Hot Pink",
    "Deep Pink",
    "Dark Magenta",

    // white/gray
    "Gainsboro",
    "Light Gray",
    "Silver",
    "Dark Gray",
    "Light Slate Gray",
    "Slate Gray",
    "Dim Gray",


    // brown
    "Antique White",
    "Wheat",
    "Tan",
    "Sandy Brown",
    "Peru",
    "Rosy Brown",
    "Sienna",
    "Saddle Brown",
    "Maroon",
]

//These colors need to use white text instead of black
const darkBackgrounds = [
    "Crimson", "Coral", "Darkorange", "ForestGreen", "DarkCyan", "DarkTurquoise", "CadetBlue", "DarkBlue", "DarkSlateBlue", "BlueViolet", "DarkOrchid",
    "DarkViolet", "DarkMagenta", "DimGray", "Indigo", "LightSlateGray", "Maroon", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumVioletRed", "MidnightBlue", "Navy", "OliveDrab", "RoyalBlue", "SaddleBrown", "SeaGreen", "Sienna", "SlateBlue", "SlateGray",
    "SteelBlue", "Teal", "Purple"]

//get text color based on background
export const getTextColor = (background) => {
    if (darkBackgrounds.includes(background)) {
        return "white";
    } else {
        return "black";
    }
}