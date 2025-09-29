import React from "react";
import { showFormattedDate } from "../utils/index";

function NoteCardBody({ title, createdAt, body }) {
  return (
    <div className="note-card">
      <h3 className="note-card__title">{title}</h3>
      <p className="note-card__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-card__body">{body}</p>
    </div>
  );
}

export default NoteCardBody;