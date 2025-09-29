import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";

function NoteCardBody({ id,  title, createdAt, body }) {
  return (
    <div className="note-card">
      <h3 className="note-card__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-card__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-card__body">{body}</p>
    </div>
  );
}

export default NoteCardBody;
