/* eslint-disable react-hooks/rules-of-hooks */
import { kakaoBook } from "@/modules/apis";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import css from "styled-jsx/css";
import { SearchDetailCard } from "./SearchDetailCard";


export const SearchBar: React.FC = () => {
    // const [ jinheeSend, setJinheeSend ] = useState('')
    const [ searchInput, setSearchInput ] = useState('')
    const [ data, setData ] = useState([{
        authors: [''], contents:'책정보', title: '책이름', thumbnail: '이미지URL', isbn: 0, 
    }])
    const dispatch = useDispatch()

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
                
    return(
        <>
            <form onSubmit={searchSubmit}>
                <input type="search" value={searchInput} className="searchBar" placeholder="책 제목 검색" onChange={searchChange}/>
                <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
            </form>
            <ul>{data.map((book) => 
                <SearchDetailCard
                    key={book.isbn}
                    href={book.title} 
                    BookName={book.title}
                    author={book.authors} 
                    src={book.thumbnail} />)}</ul>

            <style jsx>{style}</style>
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