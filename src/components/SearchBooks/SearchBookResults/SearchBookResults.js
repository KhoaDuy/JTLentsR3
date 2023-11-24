import { useEffect, useState } from "react";
import { search } from "../../../BooksAPI";
import Books from "../../Books/Books";
import "../SearchBookResults/SearchBookResults.css";
function SearchBookResult({ title, numberOfBooks }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (title) {
      search(title, numberOfBooks)
        .then((res) => {
          if (!res) return;
          console.log(res);
          setBooks(res);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setBooks([]);
    }

    
  }, [title]);

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.length > 0 ? (
          <Books data={books} shelf="none" ></Books>
        ) : (
          <p>No books found.</p>
        )}
      </ol>
    </div>
  );
}

export default SearchBookResult;
