import React from "react";
import { getTextColor } from "./ColorList";

function Quote({ quote, color, isEditMode, updateQuote, deleteQuote, reviewedQuote }) {
    const opacityValue = quote.reviewed ? 0.5 : 1;

    const updateQuoteText = (e) => {
        updateQuote(quote.id, "text", e.target.value);
    }

    const updateQuoteSource = (e) => {
        updateQuote(quote.id, "source", e.target.value);
    }

    const clickedQuote = () => {
        if (!isEditMode) {
            reviewedQuote(quote.id);
        }

    }

    return (
        <li className="quote-card"
            style={{ backgroundColor: color, opacity: opacityValue }} onClick={clickedQuote}>
            {isEditMode ?
                (
                    <div className="wrapper">
                        <i className="fa-regular fa-trash-can" onClick={() => deleteQuote(quote.id)}></i>
                        <textarea className="quote-text" rows={10} value={quote.text} placeholder="Quote text here" onChange={updateQuoteText} style={{ color: getTextColor(color) }}></textarea>
                        <input className="quote-source" value={quote.source} placeholder="Quote source here" onChange={updateQuoteSource} style={{ color: getTextColor(color) }}></input>
                    </div>
                ) :
                (
                    <div className="wrapper">
                        <p className="quote-text" style={{ color: getTextColor(color) }}>{quote.text}</p>
                        <p className="quote-source" style={{ color: getTextColor(color) }}>{quote.source}</p>
                    </div>
                )}
        </li>
    )
}

export default Quote;