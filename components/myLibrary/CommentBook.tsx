import Link from "next/link"
import MyLibraryLayout from "./MyLibraryLayout"

interface CommentProps {
  comment: { 
    title: string
    image: string
    date: string
  }
}

export const CommentBook = (props: CommentProps) => {
  const { title, image, date } = props.comment
  const writeDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long', // january
    year: 'numeric'
  })
  return (
    <MyLibraryLayout>
    <ul>
      <Link href="/comments/[id]">
        <a>
            <img className="w-full" src='http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg' alt="Sunset in the mountains" />
            <div className="px-2 py-1">
                <div className="mb-2 text-xl font-bold">작별인사</div>
                <p className="text-base text-gray-700">
                    지금까지의 한줄평 : 3<br/>
                    2022-07-05 김영하 최고
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                <span
                    className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                <span
                    className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
            </div>
        </a>
        </Link>
    </ul>
    </MyLibraryLayout>
  )
}
