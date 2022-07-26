import Link from "next/link"
import { title } from "process"

type Props = {
    props : {
        link: string
        title: string
    }
}

const Button = ({props}: Props) => {
  return (
    <Link href={props.link}>
        <a>{props.title}</a>
    </Link>
  )
}

export default Button