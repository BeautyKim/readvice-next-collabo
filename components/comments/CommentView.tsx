import { CommentItem } from "./CommentItem"

export const commentView: React.FC = (props) => {
    const { comments }: any = props
  return (
    <ul>
        {comments.map((comment:any) => <CommentItem />)}
    </ul>
  )
}
