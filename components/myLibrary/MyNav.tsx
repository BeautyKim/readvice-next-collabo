import Link from "next/link"

export const MyNav: React.FC = () => {
    const navMyPage = [
        { label: '읽은책', path: '/books/readingBooks' },
        { label: '찜한책', path: '/books/likeBooks' },
    ]
  return (
    <nav>
        <ul>
            {navMyPage.map(nav => (
                                <Link href={nav.path} key={nav.label} className="
                                  
                                "><a>{nav.label}</a></Link>
                            ))}
        </ul>
    </nav>
  )
}

