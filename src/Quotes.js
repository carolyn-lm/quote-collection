import React from "react";
import Quote from "./Quote";

function Quotes({ quotes, color, isEditMode, updateQuote, deleteQuote, reviewedQuote }) {

    return (
        <ul className="list">
            {quotes.length > 0 && quotes.map((quote) => <Quote key={quote.id} quote={quote} color={color} isEditMode={isEditMode} updateQuote={updateQuote} deleteQuote={deleteQuote} reviewedQuote={reviewedQuote} />)}
        </ul>
    )
}

export default Quotes;