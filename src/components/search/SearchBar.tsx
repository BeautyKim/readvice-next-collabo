import { BsSearch } from "react-icons/bs"
import css from "styled-jsx/css";

interface Props{
    onSubmit: (e : React.FormEvent<HTMLFormElement>) => void
    onChange: (e : React.ChangeEvent<HTMLInputElement> ) => void
    value?: string
}

export const SearchBar: React.FC<Props> = ({onSubmit, onChange, value}: Props) => {
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="search" value={value} className="searchBar" placeholder="책 제목 검색" onChange={onChange}/>
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