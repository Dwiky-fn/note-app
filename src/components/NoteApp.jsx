import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from "../pages/NotFoundPage";

function NoteApp() {
  return (
    <div className="note-app">
      <header className="note-header">
        <h1>
          <Link to={'/'}>Catatan Pribadi</Link>
        </h1>
        <Navigation />
      </header>
      <main className="note-app__content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
