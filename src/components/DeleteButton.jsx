import React from "react";
import Swal from "sweetalert2";

function DeleteButton({ id, onDelete }) {
  const onDeleteHandler = () => {
    Swal.fire({
      title: 'Hapus Catatan?',
      text: 'Catatan ini akan dihapus permanen.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire('Dihapus', 'Catatan berhasil dihapus.', 'success')
      }
    });
  };
  
  return (
    <button className="note-card__delete" onClick={onDeleteHandler}>
      Hapus
    </button>
  );
}

export default DeleteButton;