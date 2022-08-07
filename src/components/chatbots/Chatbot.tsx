import React, { useCallback, useState } from "react";
import { analyzeNextSteps } from "./analyzeNextSteps";
import Chats from "./Chats";
import Image from "next/image"


interface ResponseBotObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const Chatbot: React.FC = () => {
    // 유저가 보낸 메세지
    const [ userResponse, setUserResponse ] = useState<string>("");
    // 대화 횟수
    const [ step, setStep ] = useState<number>(0);
    
    const [botResponse, setBotResponse] = useState<ResponseBotObject>({
        purpose: "", message: "", sender: "bot" });
    const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
    const setNextStep = (response: string) => {
        setStep(prevState => prevState + 1);
        setSendUserResponse(response);
        let res = analyzeNextSteps(step, response);
        setBotResponse({ ...res, sender: "bot" });
        setUserResponse("");
    };

    const optionClick = (e: React.MouseEvent<HTMLElement>) => {
        let option = e.currentTarget.dataset.id;
        if (option) {
        setNextStep(option);
        }
    };

    // event handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserResponse(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNextStep(userResponse);
    };
    return (
        <>
            <Chats
                userResponse={userResponse}
                botResponse={botResponse}
                sendUserResponse={sendUserResponse}
                optionClick={optionClick}
            />
                <form onSubmit={e => handleSubmit(e)} className="form-container">
                    <input
                    onChange={e => handleInputChange(e)}
                    value={userResponse}
                    />
                    <button>
                        <Image src="/svg/paperplane.svg" alt="종이비행기" width={20} height={20}/>
                    </button>
                </form>

            <style jsx>{`
                .form-component-style {
                    border-radius: 10px;
                    padding: 0.5em;
                    font-size: 1em;
                }
                .chat-container {
                    width: 80vw;
                    height: 60vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border: 0.5px solid #d8d8d8;
                    padding: 2em;
                    border-radius: 10px;
                }
                .form-container {
                    display: flex;
                    justify-content: space-between;
                }
                input {
                    width: 92%;
                    border-style: none;
                    border: 0.5px solid #393e46;
                }
                button {
                    background: #e5dfdf;
                    color: #393e46;
                    border-style: none;
                }
            `}</style>
        </>
    );
    };

export default Chatbot;
