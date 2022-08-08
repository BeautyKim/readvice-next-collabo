import React, { useState } from 'react'
import tw from 'tailwind-styled-components';
import Chatbot from './Chatbot';

const ChatbotModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      <button
        className="fixed bottom-0 right-0 mb-1 mr-1 transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img className="bot" src={'/images/chatbot.svg'} width={100} height={100} alt="챗봇" />
      </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="w-auto max-w-6xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start p-3 border-b border-solid rounded-t justify-content border-slate-200">
                  <h3 className="text-3xl font-semibold">
                    리드봇
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <Span>
                      ×
                    </Span>
                  </button>
                </div>
                {/*body*/}
                <Body>
                    <Chatbot />
                </Body>
                {/*footer*/}
                <Footer>
                  <button
                    className="mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    대화 종료
                  </button>
                </Footer>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  )
}

export default ChatbotModal

const Span = tw.span`
  block 
  w-6 
  h-6 
  text-2xl 
  text-black 
  bg-transparent 
  outline-none 
  opacity-5 
  focus:outline-none
`

const Body = tw.div`
  relative 
  flex-auto 
  p-6 
  h-96
`

const Footer = tw.div`
  flex
  items-center 
  justify-end 
  p-6 
  border-t 
  border-solid 
  rounded-b
  border-slate-200
`