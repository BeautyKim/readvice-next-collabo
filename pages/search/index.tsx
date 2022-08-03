import { SearchBar } from "@/components/search/SearchBar"
import SearchCard from "@/components/search/SearchCard"
import { useState } from "react"


const SearchDetailPage = () => {
  const [ jinheeSend, setJinheeSend ] = useState('')
  const [ searchInput, setSearchInput ] = useState('')
  const [ data, setData ] = useState([{
    isbn: 0, title: '', authors: [], thumbnail: '', contents:''
  }])

  const searchChange = () => {

  }
  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }


  return (
    <>
      <SearchBar onSubmit={searchSubmit} onChange={searchChange} value={jinheeSend || searchInput} />
      <div>{data.map((book) => 
          <SearchCard 
            key={book.isbn}
            BookHref={book.title}
            title={book.title} 
            contents={book.contents} 
            thumbnail={book.thumbnail} />)}</div>
    </>
  )
}

export default SearchDetailPage
