import { commentApi } from "@/apis/commentApi"
import { CommentType } from "@/types/comments"
import { useEffect, useState } from "react"

export const CommentList: React.FC = () => {
    const [ comments, setComments ] = useState([])
    useEffect(() => {
        commentApi.fetch().then((res) => {
            console.log(res.data)
            setComments(res.data)
        })
    }, [])
    return(
        <>
        <h2>Comments</h2>
        {comments && comments.map((comment: CommentType) => (
            <span key={comment.id}>{comment.comment}</span>))}
        </>
    )
}
