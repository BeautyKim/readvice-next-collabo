import Image from "next/image"
import Link from "next/link"

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
    <li>
      <Link href="/comments/commentWrite">
        <a>
          <div>
            <Image src={image} alt={title} width={300} height={200} layout="responsive" />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{writeDate}</time>
          </div>
        </a>
        </Link>
            <img className="w-full" src='http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg' alt="Sunset in the mountains" />
            <div className="px-2 py-1">
                <div className="font-bold text-xl mb-2">작별인사</div>
                <p className="text-gray-700 text-base">
                    지금까지의 한줄평 : 3<br/>
                    2022-07-05 김영하 최고
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
    </li>
  )
}
