import React from "react";
import NoteInput from '../components/NoteInput';
import { addNote } from "../utils/local-data";

function AddPage() {
  function onAddNoteHandler(note) {
    addNote(note)
  }

  return (
    <section>
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler}/>
    </section>
  )
}

export default AddPage;