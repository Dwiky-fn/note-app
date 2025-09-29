import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="not-found-page">
      <h2>404</h2>
      <p>Halaman tidak ditemukan.</p>
      <button onClick={() => navigate("/")}>Kembali ke Home</button>
    </section>
  );
}

export default NotFoundPage;
