import BooksheftsBook from "./BookshelvesBook/BookshelvesBook";
import BooksheftsTitle from "./BookshelvesTitle/BookshelvesTitle";

function Bookshefts({data,setter}){

    return (
        <div className="bookshelf">
              <BooksheftsTitle title={data.title} />
              <BooksheftsBook data={data} setter={setter} />
        </div>
    )
}
export default Bookshefts