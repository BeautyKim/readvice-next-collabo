import React from 'react'
import Link from 'next/link'


type Props = {
    href: string
    BookName: string,
    author: string[],
    src: string
}

export const SearchCard: React.FC<Props> = ({ src, author, BookName}: Props) => {
  return (
    <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-2 py-4 mx-auto">
                <div className="mx-auto flex">
                    <img alt="ecommerce" 
                        className="h-full md:w-16 object-cover object-center rounded"
                        src={src} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{author}</h2>
                        <h1 className="text-gray-900 text-1xl title-font font-medium mb-1">{BookName}</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}
