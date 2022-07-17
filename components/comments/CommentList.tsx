import Link from "next/link"
import { SEO } from "../common/SEO"
import { CommentItem } from "./CommentItem"

const CommentList: React.FC = (props) => {
    const { comments }: any = props
    return(
        <>
        <SEO title="한줄평" />
        <ul>
            {comments.map((comment:any) => (<CommentItem key={comment.image} comment={comment}/>
            ))}
        </ul>

        </>
    )
}
export default CommentList