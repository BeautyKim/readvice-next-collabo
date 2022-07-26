import bookData from "@/data/book.json"
import SearchCard from "../ui/SearchCard"

const SearchResult  = () => {

  return (
  <>
    <div>
      {bookData.map(book => 
        <SearchCard 
          key={book.isbn}
          BookName={book.book_title}
          BookInfo={book.book_info}
          author={book.author}
          BookImg={book.book_img} 
          BookHref={`/books/${book.book_title}`} />
        )}
    </div>
  </>
  )
}

export default SearchResult 