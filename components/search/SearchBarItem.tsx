//@ts-check
import { searchApi } from "@/modules/apis";
import { useRouter } from "next/router";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchBar: React.FC = () => {
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
        <>
            <form onSubmit={searchSubmit}>
                <input type="search" ref={searchInputRef} className="searchBar" placeholder="책 제목 검색" readOnly/>
                <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
            </form>
            <style jsx>{`
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
            `}</style>
        </>
    )
}
// #f8f2f2