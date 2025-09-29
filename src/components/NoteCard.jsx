import React from "react";
import NoteCardBody from "./NoteCardBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteCard({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="note-card">
      <NoteCardBody title={title} createdAt={createdAt} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
    </div>
  );
}

export default NoteCard;