import { useEffect, useState } from "react"

export function HomeClock(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const sec = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return (() => clearInterval(sec))
    }, [])

    return(
        <>
            <div className="date">
                {time.toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "long" })}
            </div>
            <div className="time">
                {time.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric" })}
            </div>
            
            <style jsx>{`
                div {
                    text-align: right;
                }
                .date {
                    font-size: 20px;
                }
                .time {
                    font-family: 'Anek Malayalam', sans-serif;
                    font-size: 40px;
                }
                `}</style>
        </>
    )
}