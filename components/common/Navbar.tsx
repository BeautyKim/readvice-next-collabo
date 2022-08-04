import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from "next/image";
import Link from 'next/link'
import { Logout } from '../users/Logout';
import SearchModal from '../search/SearchModal';

  const userNavigation = [
    { name: 'Profile', href: '/users/user' },
    { name: 'My Library', href: '/myLibrary' },
    { name: 'login Home', href: '/loginHome' },
  ]

function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar: React.FC = () => {
  return (
    <>
    <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="h-2 mr-2 sm:h-9"><a><Image src="/images/readviceLogo.svg" alt="readviceLogo" width={100} height={100}/></a></Link>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                  <SearchModal />
                        <Link href={'/users/login'}>
                            <a><button type="button" className="p-1 font-bold text-[#404040] hover:text-gray"
                                >Login
                            </button></a>
                        </Link>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex items-center max-w-xs rounded-full">
                            <span className="sr-only">Open user menu</span>
                            <Image src='/svg/user.svg' alt="유저 이미지" width={30} height={30}/>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <Menu.Item >
                                        {({ active }) => (
                                        <a className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        )}
                                    </Menu.Item>
                                </Link>
                            ))}
                                <Logout className="block px-4 py-2 text-sm font-medium" />
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <SearchModal />
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                    
                  </div>
                </div>
              </div>
              {/* Mobile menu */}
              <Disclosure.Panel className="absolute inset-x-0 z-10 p-2 space-y-1 transition origin-top-right transform md:hidden">
                <div className="pt-4 pb-3 bg-white shadow-lg rounded-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        <Image src='/svg/user.svg' alt="유저 이미지" width={30} height={30}/>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none">유저이름</div>
                      <div className="text-sm font-medium leading-none">user@naver.com</div>
                    </div>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <Disclosure.Button
                                as='a'
                                className="block px-3 py-2 text-base font-medium rounded-md hover:text-white hover:bg-gray">
                                {item.name}
                            </Disclosure.Button>
                        </Link>
                    ))}
                  </div>
                  <div className="flex">
                    <Logout className='block w-full px-2 py-2 font-medium text-center rounded-md hover:text-white hover:bg-gray'/>
                    <button className='block w-full px-2 py-2 font-medium text-center rounded-md hover:text-white hover:bg-gray'><Link href={"/users/login"}><a>Login</a></Link></button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
