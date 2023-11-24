import { useEffect, useState } from "react";
import SearchBookResult from "../SearchBookResults/SearchBookResults";
import { Link } from "react-router-dom";
import "../SearchBookBar/SearchBookBar.css";
function SearchBookBar() {

  const [title, setTitle] = useState("");
  const [numberOfBooks, setNumberOfBooks] = useState(20);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value)
  }

  return (
    <>
      <div className="search-books-bar">
        <Link to="/"
          className="close-search"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={title}
            type="text" className="nameBook"
            onChange={handleChange}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>

      <SearchBookResult title={title} numberOfBooks={numberOfBooks}></SearchBookResult>
    </>
  )
}
export default SearchBookBar