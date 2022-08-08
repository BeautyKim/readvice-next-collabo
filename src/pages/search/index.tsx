import { SearchBar } from "@/components/search/SearchBar"
import SearchDetailCard from "@/components/search/SearchDetailCard"
import { kakaoBook } from "@/modules/controllers"
import { useAppSelector } from "@/modules/store"
import { useEffect, useState } from "react"


const SearchDetailPage = () => {
  const [ searchInput, setSearchInput ] = useState('아몬드')
  const [ data, setData ] = useState([{
    url: "", isbn: 0, title: '', authors: [], thumbnail: '', contents:''
  }])
  useEffect(() => {
    kakaoBook.get(`/v3/search/book?sort=accuracy&size=5&query=${searchInput}&target=title`).then(
                res => setData(res.data.documents))
            },[searchInput])

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const text = useAppSelector((AppState) => AppState.searchSuccess.value)
    // setSearchInput(searchInput)
    const value = e.target.value
    setSearchInput(value)
  }
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    kakaoBook.get(`/v3/search/book?sort=accuracy&size=5&query=${searchInput}&target=title`).then(
      res => setData(res.data.documents))
  }


  return (
    <>
    <SearchBar onSubmit={handleSubmit} onChange={HandleChange} value={searchInput}/>
      <div>{data.map((book) => 
          <SearchDetailCard 
            key={book.isbn}
            BookHref={book.url}
            title={book.title} 
            contents={book.contents} 
            thumbnail={book.thumbnail} />)}</div>
    </>
  )
}

export default SearchDetailPage
