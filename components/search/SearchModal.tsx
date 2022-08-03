import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SearchButton from './SearchButton'
import { HeaderSearchBar } from './HeaderSearchBar'
import { ImageDrop } from './ImageDrop'



const SearchModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }
    return (
    <>
        <SearchButton onClick={openModal} />
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {/* Dialog.Panel  width 반응형 수정 필요*/}
                    <Dialog.Panel className="w-100 mx-10 transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                    {/* 검색창 해더 */}
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <HeaderSearchBar />
                        <ImageDrop />
                    </Dialog.Title>
                    {/* 검색창 끄기 */}
                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >
                        Got it, thanks!
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
      </Transition>
    </>
  )
}

export default SearchModal