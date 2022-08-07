import Link from "next/link"

type Props = {
    BookHref: string
    title: string
    contents: string
    authors?: string[]
    thumbnail: string
}


const SearchDetailCard = ({BookHref, title, contents, authors, thumbnail}: Props) => {
    return (
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-2 py-4 mx-auto">
                <Link href={BookHref}><a>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" 
                            className="h-full md:w-20 object-cover object-center rounded"
                            src={thumbnail} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{authors}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                            <p className="leading-relaxed">{contents}</p>
                        </div>
                    </div>
                </a></Link>
            </div>
        </div>
        )
}
export default SearchDetailCard