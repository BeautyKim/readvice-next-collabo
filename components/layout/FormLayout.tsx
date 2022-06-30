import { Footer } from "./Footer"
import { LayoutProps } from "./Layout"

const FormLayout = ({ children }: LayoutProps) => {
    return(
        <>
            {children}
            <Footer />
        </>
    )
}
export default FormLayout