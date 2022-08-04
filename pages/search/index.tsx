import SearchDetailCard from "@/components/search/SearchDetailCard"
import { useState } from "react"


const SearchDetailPage = () => {
  const [ jinheeSend, setJinheeSend ] = useState('')
  const [ searchInput, setSearchInput ] = useState('')
  const [ data, setData ] = useState([{
    isbn: 0, title: '', authors: [], thumbnail: '', contents:''
  }])


  return (
    <>
    <h1>검색 결과창(서버에서 받은 검색어로 나온 결과 화면)</h1>
      <div>{data.map((book) => 
          <SearchDetailCard 
            key={book.isbn}
            BookHref={book.title}
            title={book.title} 
            contents={book.contents} 
            thumbnail={book.thumbnail} />)}</div>
    </>
  )
}

export default SearchDetailPage
