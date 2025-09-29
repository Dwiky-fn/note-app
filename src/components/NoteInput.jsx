import PropTypes from "prop-types";
import React from "react";

const TITLE_LIMIT = 50;

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    if (inputTitle.length <= TITLE_LIMIT) {
      this.setState({ title: inputTitle });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();

    const note = {
      ...this.state,
      title: this.state.title.trim() === "" ? "Untitled" : this.state.title,
    };
    this.props.addNote(note);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
        <div className="note-input__title__char-limit">
          Sisa karakter: {TITLE_LIMIT - this.state.title.length}
        </div>
        <input
          type="text"
          placeholder="Masukkan judul..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Ketikkan catatan disini..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
