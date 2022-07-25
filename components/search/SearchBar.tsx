//@ts-check
import { searchApi } from "@/modules/apis";
import { useRouter } from "next/router";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";


export function SearchBar(){
    const router = useRouter()
    const searchInputRef = useRef(null)
    // const search = (e: any) => {
    //     e.preventDefault()
    //     const term = searchInputRef.current.value
    //     if (!term.trim()) return;
    //     router.push(`/search?term=${term.trim()}&searchType=`);
    // }
    const searchSubmit = (e: any) => {
        e.preventDefault()
        const randomTerm = searchApi()
        if (!randomTerm) return
        router.push(`/search?term=${randomTerm}&searchType=`)
    }
    
    return(
        <div className="allsearchBar">
        <form onSubmit={searchSubmit}>
            <input type="search" ref={searchInputRef} className="searchBar" placeholder="책 제목 또는 저자명을 입력해주세요." />
            <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
        </form>
            <style jsx>{`
                .file {
                    display: none;
                }
                .allsearchBar {
                    margin:auto;
                    text-align:center;
                }
                    
                form {
                    margin:auto;
                    display: inline-block;
                    width: 60%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .searchBar {
                    width: 100%;
                    height: 2.8rem;
                    background: #f5f5f5;
                    outline: none;
                    border: none;
                    border-radius: 1.625rem;
                    padding: 0 3.5rem 0 1.5rem;
                    font-size: 1rem;
                }
                .searchQuerySubmit{
                    width: 4rem;
                    height: 2.8rem;
                    margin-left: -5rem;
                    background: none;
                    border: none;
                    outline: none;
                }
                .searchQueryCamera{
                    margin-top: 20px;
                    width: 3rem;
                    height: 2.8rem;
                    margin-left: -2rem;
                    background: none;
                    border: none;
                    outline: none;
                    cursor: pointer;
                }
                .searchQuerySubmit:hover, .searchQueryCamera:hover {
                    cursor: pointer;
                }

            `}</style>
        </div>
    )
}