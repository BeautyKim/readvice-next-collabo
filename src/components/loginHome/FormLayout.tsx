import { Layout } from "@/modules/types"
import { Footer } from "../common/Footer"

const LoginHomeLayout = ({ children }: Layout) => {
    return(
        <>
            {children}
            <Footer />
        </>
    )
}
export default LoginHomeLayout