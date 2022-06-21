import Link from "next/link";

export function BookNav(){
    return(
        <nav>
            <ul>
                <li><Link href="/comments/readingBooks"><a>읽은 책</a></Link> </li>
                <li><Link href="/comments/likeBooks"><a>찜한 책</a></Link> </li>
                <li><Link href="/comments/recordBooks"><a>독서기록장</a></Link> </li>
            </ul>
        </nav>
    
    )
}