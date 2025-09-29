import React from "react";
import NoteCard from "./NoteCard";
import PropTypes, { shape, string } from "prop-types";

function NoteList({ notes, onDelete, onArchive, emptyMessage }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default NoteList;
