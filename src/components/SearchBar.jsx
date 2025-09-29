import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari judul catatan..."
          value={this.props.value}
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

export default SearchBar;