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
                <div className="flex items-center justify-center min-h-full p-4 text-center">
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
                    <Dialog.Panel className="p-8 mx-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl w-100 rounded-2xl">
                    {/* 검색창 해더 */}
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <HeaderSearchBar />
                        <ImageDrop />
                    </Dialog.Title>

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