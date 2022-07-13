import Link from "next/link"
import { LayoutProps } from "../layout/Layout"

const Card = ({ children } : LayoutProps) => {
    return(
        <div className="grid grid-cols-5 gap-5 place-content-center m-24 ">
            <div className="w-48 h-96 rounded overflow-hidden shadow-lg">
            { children }
            </div>
        </div>
    )
}
export default Card