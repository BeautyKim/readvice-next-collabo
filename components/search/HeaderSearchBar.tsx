import { kakaoBook } from "@/modules/apis";
import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { SearchBar } from "./SearchBar";
import { SearchDetailCard } from "./SearchDetailCard";


export const HeaderSearchBar: React.FC = () => {
    
    const [ searchInput, setSearchInput ] = useState('')
    const [ data, setData ] = useState([
        {isbn: 0, title: '', authors: [], thumbnail: ''}])
    
    //     search.imageRes().then((res) => setJinheeSend(res.data))


    // useEffect(() => {
    //     kakaoBook.get(`/v3/search/book?sort=accuracy&size=15&query=${jinheeSend}&target=title`).then(
    //                 res => setData(res.data.documents))
    //             },[jinheeSend])
    useEffect(() => {
        kakaoBook.get(`/v3/search/book?sort=accuracy&size=15&query=${searchInput}&target=title`).then(
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
            {/* <form onSubmit={searchSubmit}>
                <input type="search"  className="searchBar" placeholder="책 제목 검색" onChange={searchChange}/>
                <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
            </form> */}
            <SearchBar onSubmit={searchSubmit} onChange={searchChange} />
            <ul>{data.map((book) => 
                <SearchDetailCard
                    key={book.isbn}
                    href={book.title} 
                    BookName={book.title}
                    author={book.authors} 
                    src={book.thumbnail} />)}</ul>

            {/* <style jsx>{style}</style> */}
        </>
    )
}
const style = css`
    form {
        display: inline-block;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .searchBar {
        width: 100%;
        height: 2.8rem;
        background: #ffffff;
        outline: none;
        border: none;
        border-radius: 1.625rem;
        padding: 0 3.5rem 0 1.5rem;
        font-size: 1rem;
    }
    .searchQuerySubmit{
        width: 4rem;
        height: 2.8rem;
        margin-left: -2rem;
        background: none;
        border: none;
        outline: none;
    }
`