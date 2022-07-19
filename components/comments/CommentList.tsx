import { CommentBook } from "./CommentBook"

const CommentList: React.FC = (props) => {
    const { comments }: any = props
    return(
        <>
        <ul>
            {comments.map((comment:any) => (<CommentBook key={comment.image} comment={comment}/>
            ))}
        </ul>

        </>
    )
}
export default CommentList