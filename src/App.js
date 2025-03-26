import React, { useState, useEffect } from 'react';
import Header from './Header';
import Help from './Help';
import './App.css';
import Folders from './Folders';
import Quotes from './Quotes';
import starterQuotes from './StarterQuotes';

function App() {
  const [folders, setFolders] = useState(JSON.parse(window.localStorage.getItem("quotes")) || [...starterQuotes]);
  const [currentFolder, setCurrentFolder] = useState({});
  const [headerText, setHeaderText] = useState("Quote Collection");
  const [lastID, setLastID] = useState(parseInt(JSON.parse(window.localStorage.getItem("lastid"))) || 1);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("quotes", JSON.stringify(folders));
    window.localStorage.setItem("lastid", JSON.stringify(lastID));
  }, [folders, lastID]);

  const addFolder = () => {
    const newfolder = {
      id: lastID + 1,
      inEditMode: true,
      name: "",
      color: "white",
      lastQuoteId: 0,
      quotes: []
    };
    setFolders([...folders, newfolder]);
    setLastID(lastID + 1);
  }

  const deleteFolder = (deleteId) => {
    const updatedFolders = folders.filter(folder => folder.id !== deleteId);
    setFolders([...updatedFolders]);
  }

  const editFolder = (folderId) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id !== folderId) {
        return folder;
      } else {
        folder.inEditMode = !folder.inEditMode;
        return folder;
      }
    });
    setFolders(updatedFolders);
  }

  const updateFolder = (editId, updateType, newValue) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id !== editId) {
        return folder;
      } else {
        if (updateType === "name") {
          folder.name = newValue;
          return folder;
        } else {
          folder.color = newValue;
          return folder;
        }
      }
    });
    setFolders(updatedFolders);
  };

  const updateFolderColor = (newColor) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id !== currentFolder.id) {
        return folder;
      } else {
        folder.color = newColor;
        return folder;
      }

    });
    setFolders(updatedFolders);
  };

  const openFolder = (folderId) => {
    const folder = folders.find((folder) => folder.id === folderId);
    setCurrentFolder(folder);
    setHeaderText(folder.name);
  }

  const closeFolder = () => {
    setCurrentFolder({});
    setHeaderText("Quote Collection");
  }

  const addQuote = () => {
    const newQuote = {
      id: currentFolder.lastQuoteId + 1,
      text: "",
      source: "",
      reviewed: false
    }

    const updatedQuotes = [...currentFolder.quotes, newQuote];
    const updatedFolders = folders.map((folder) => {
      if (folder.id !== currentFolder.id) {
        return folder;
      } else {
        folder.quotes = updatedQuotes;
        folder.lastQuoteId++;
        return folder;
      }
    });
    setFolders(updatedFolders);
    setIsEditMode(true);
  }

  const deleteQuote = (deleteId) => {
    const updatedQuotes = currentFolder.quotes.filter(quote => quote.id !== deleteId);
    const updatedFolders = folders.map((folder) => {
      if (folder.id === currentFolder.id) {
        folder.quotes = updatedQuotes;
      }
      return folder;
    });
    setFolders(updatedFolders);
  }

  const updateQuote = (quoteID, updateType, newtext) => {
    const updatedQuotes = currentFolder.quotes.map(quote => {
      if (quote.id === quoteID) {
        if (updateType === "text") {
          console.log("updating text")
          quote.text = newtext;
        } else {
          console.log("updating source");
          quote.source = newtext;
        }
      }
      return quote;
    });
    const updatedFolders = folders.map(folder => {
      if (folder.id === currentFolder.id) {
        folder.quotes = updatedQuotes;
      }
      return folder;
    });
    setFolders(updatedFolders);
  }

  const toggleEdit = () => {
    setIsEditMode(!isEditMode);
  }

  const reviewedQuote = (quoteID) => {
    const quoteIndex = currentFolder.quotes.findIndex(quote => quote.id === quoteID);
    const quote = currentFolder.quotes[quoteIndex];
    quote.reviewed = true;
    const updatedQuotes = [...currentFolder.quotes.slice(0, quoteIndex), ...currentFolder.quotes.slice(quoteIndex + 1), quote];
    const updatedFolders = folders.map((folder) => {
      if (folder.id === currentFolder.id) {
        folder.quotes = updatedQuotes;
        folder.lastQuoteId++;
      }
      return folder;
    });
    setFolders(updatedFolders);
  }

  const resetReviewed = () => {
    const updatedQuotes = currentFolder.quotes.map(quote => {
      quote.reviewed = false;
      return quote;
    });
    const updatedFolders = folders.map((folder) => {
      if (folder.id === currentFolder.id) {
        folder.quotes = updatedQuotes;
        folder.lastQuoteId++;
      }
      return folder;
    });
    setFolders(updatedFolders);
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  }

  return (
    <div className="App">
      <Header headerText={headerText} addFolder={addFolder} isEditMode={isEditMode} toggleEdit={toggleEdit} updateFolderColor={updateFolderColor} closeFolder={closeFolder} addQuote={addQuote} resetReviewed={resetReviewed} toggleHelp={toggleHelp} />
      {showHelp && <Help headerText={headerText} />}
      {currentFolder.name ?
        (<Quotes quotes={currentFolder.quotes} color={currentFolder.color} isEditMode={isEditMode} updateQuote={updateQuote} deleteQuote={deleteQuote} reviewedQuote={reviewedQuote} />) :
        (<Folders folders={folders} isEditMode={isEditMode} openFolder={openFolder} editFolder={editFolder} updateFolder={updateFolder} deleteFolder={deleteFolder} />)
      }
    </div>
  )
}

export default App;
