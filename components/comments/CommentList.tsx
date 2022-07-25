import { commentWrite } from "@/modules/apis/comment"
import { Comment } from "@/modules/types"
import { useEffect, useState } from "react"

export const CommentList: React.FC = () => {    
    const [ comments, setComments ] = useState([])
    useEffect(() => {
        commentWrite.get().then((res) => {
            setComments(res.data)
        })
    }, [])
    return(
        <>
        <h2>Comments</h2>
        {comments && comments.map((comment: Comment) => (
            <span key={comment.id}>{comment.comment}</span>))}
        </>
    )
}
