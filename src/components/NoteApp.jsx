import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import SearchBar from "./SearchBar";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({title, body }) {
    this.setState((prevState) => {
      return{
        notes: [
          ...prevState.notes,
          {
            id: new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if(note.id === id){
        return {...note, archived: !note.archived};
      }
      return note;
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return{
        searchQuery: event.target.value,
      }
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => 
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div className="note-app">
        <div className="note-header">
        <h1>Catatan Pribadi</h1>
          <SearchBar
            value={this.state.searchQuery}
            onSearch={this.onSearchHandler}
            />
        </div>
        <div className="note-app__content">
          <h2>Tambah Catatan</h2>
          <NoteInput
            addNote={this.onAddNoteHandler}
          />
          <h2>Daftar Catatan</h2>
          <NoteList
            notes={filteredNotes.filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler} 
            />
          <h2>Arsip Catatan</h2>
          <NoteList
            notes={filteredNotes.filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            /> 
          </div>
      </div>
    );
  }
}

export default NoteApp;