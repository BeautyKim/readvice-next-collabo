import bookData from "@/data/book.json"
import SearchCard from "./SearchCard"

const SearchResult  = () => {

  return (
  <>
  <h1>검색어 : 아몬드 </h1>
    <div>
      {bookData.map(book => 
        <SearchCard 
          key={book.isbn}
          BookName={book.book_title}
          BookInfo={book.book_info}
          BookImg={book.book_img} 
          BookHref={`/books/${book.book_title}`} />
        )}
    </div>
  </>
  )
}

export default SearchResult 