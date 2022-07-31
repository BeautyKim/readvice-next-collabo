import Link from "next/link"

export const MyNav: React.FC = () => {
    const navMyPage = [
        { label: '읽은책', path: '/books/readingBooks' },
        { label: '찜한책', path: '/books/likeBooks' },
    ]
  return (
<nav>
    <ul className="flex border-b">
        <li className="-mb-px mr-1">
            <a
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                href="#">Active</a>
        </li>
        <li className="mr-1">
            <Link href={'/books/likeBooks'}>
              <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Tab</a>
            </Link>
        </li>
    </ul>
</nav>
  )
}

