import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
        key={note.id}
        id={note.id}
        onDelete={onDelete}
        onArchive={onArchive}
        {...note}/>
      ))}
    </div>
  );
}

export default NoteList;