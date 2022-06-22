import Link from "next/link"

const BookCard = ({ photo }: any) => {
    return(
        <article className="wrap">
            <Link href={"/books/"+photo.id} key={photo.id} scroll={false}>
                <a className="a">
                    <div className="imgWrap">
                        <img src={photo.thumbnailUrl}/>
                    </div>
                    <div className="commentHead">
                    </div>
                </a>
            </Link>
        </article>
    )
}
export default BookCard