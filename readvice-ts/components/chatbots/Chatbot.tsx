import Image from "next/image";
import chatbot from "@/public/images/chatbot.svg"

export function Chatbot(){
    return(
        <div>
            <Image className="bot" src={chatbot} width={100} height={100} alt="챗봇" />
            <style jsx>{`
                div {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                }
            `}</style>
        </div>
    )
}