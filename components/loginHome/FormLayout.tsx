import { LayoutProps } from "@/types/common"
import { Footer } from "../common/Footer"

const LoginHomeLayout = ({ children }: LayoutProps) => {
    return(
        <>
            {children}
            <Footer />
        </>
    )
}
export default LoginHomeLayout