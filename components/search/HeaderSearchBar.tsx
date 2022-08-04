import { kakaoBook } from "@/modules/apis";
import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchDetailCard } from "./SearchDetailCard";


export const HeaderSearchBar: React.FC = () => {
    
    const [ searchInput, setSearchInput ] = useState('')
    const [ data, setData ] = useState([
        {isbn: 0, title: '', authors: [], thumbnail: ''}])
    
    useEffect(() => {
        kakaoBook.get(`/v3/search/book?sort=accuracy&size=5&query=${searchInput}&target=title`).then(
                    res => setData(res.data.documents))
                },[searchInput])


    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchInput(value)
    }
    const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('검색어: '+ searchInput)
        console.log(data)
    }

    // const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     const bookController = new BookController()
    //     const result = bookController.search(searchInput).then(res => setData(res))
    //     return result
    // }
          
    return(
        <>
            <SearchBar onSubmit={searchSubmit} onChange={searchChange} />
            <ul>{data.map((book) => 
                <SearchDetailCard
                    key={book.isbn}
                    href={book.title} 
                    BookName={book.title}
                    author={book.authors} 
                    src={book.thumbnail} />)}</ul>
        </>
    )
}