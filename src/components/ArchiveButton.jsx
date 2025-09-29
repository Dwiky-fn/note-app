import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="note-card__archive" onClick={() => onArchive(id)}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
