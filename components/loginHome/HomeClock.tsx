import { useEffect, useState } from "react"

const HomeClock = () => {
    const [time, setTime] = useState(new Date())
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    useEffect(() => {
        const sec = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return (() => clearInterval(sec))
    }, [])

    return(
        <>
            <div>
                {time.toLocaleTimeString()}
            </div>
            <div>
            </div>
        </>
    )
}
export default HomeClock