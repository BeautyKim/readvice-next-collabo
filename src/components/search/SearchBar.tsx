import { onProps } from "@/modules/types";
import { BsSearch } from "react-icons/bs"
import css from "styled-jsx/css";


export const SearchBar: React.FC<onProps> = ({onSubmit, onChange}: onProps) => {
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="search" className="searchBar" placeholder="책 제목 검색" onChange={onChange}/>
            <button type="submit" className="searchQuerySubmit"><BsSearch size={20}/></button>
        </form>
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