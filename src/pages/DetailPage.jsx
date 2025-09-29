import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  return note ? (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </div>
  ) : (
    <p>Catatan tidak ditemukan</p>
  )
}

export default DetailPage;