import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"


const Card = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
        {props.children}
    </div>
  )
}

export default Card