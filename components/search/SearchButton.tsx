import React from 'react'
import { BsSearch } from "react-icons/bs";


type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchButton: React.FC<Props> = ({onClick}: Props) => {

  return (
    <button type="button" onClick={onClick}>
      <BsSearch size={40}
        className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-white'/>
    </button>
  )
}

export default SearchButton