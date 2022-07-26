import { Layout } from "@/modules/types"

const ChatbotModal = ({ children }: Layout) => {
    return (
    <div id="chatbotModal"
        data-modal-placement="bottom-right" tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-2xl p-4 md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                { children }
            </div>
        </div>
    </div>
    )
}

export default ChatbotModal