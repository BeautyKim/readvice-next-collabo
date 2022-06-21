//@ts-check
import { BsSearch, BsFillCameraFill } from "react-icons/bs";


export function SearchBar(){

    return(
        <div className="allsearchBar">
        <form action="/books/search">
            <input type="search" className="searchBar" placeholder="책 제목 또는 저자명을 입력해주세요."/>
            <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
            <label className="searchQueryCamera" form="chooseFile" ><BsFillCameraFill size={20}/></label>
            <input type="file" className="file" id="chooseFile" />
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