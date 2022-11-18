import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function createNote(note) {
        setNotes(previousNotes => {
            return [...previousNotes, note];
        });
    }

    function deleteNote(id) {
        setNotes(previousNotes => {
            return previousNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (<div>
        <div className="content">
            <Header />
            <CreateArea onAdd={createNote} />
            {defaultNotes.map((note) =>
                <Note
                    key={note.key}
                    id={note.key}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            )}
            {notes.map((note, index) =>
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            )}
        </div>
        <Footer />
    </div>);
}

export default App;