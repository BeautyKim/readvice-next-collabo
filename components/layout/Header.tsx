import Image from "next/image";
import Link from "next/link";
import css from "styled-jsx/css";
import React, { useState } from "react";

const style = css`
    .hamburger {
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: all 0.25s;
        position: relative;
    }
    .hamburger-top,
    .hamburger-middle,
    .hamburger-bottom {
        content: '';
        position: absolute;
        width: 24px;
        height: 3px;
        top: 0;
        left: 0;
        background: #9c9aa6;
        transform: rotate(0);
        transition: all 0.5s;
    }   
    .hamburger-middle {
        transform: translateY(7px);
    }
    .hamburger-bottom {
         transform: translateY(14px);
    }
    .open {
        transform: rotate(90deg);
        transform: translateY(0px);
    }
    .open .hamburger-top {
        transform: rotate(45deg) translateY(6px) translateX(6px);
    }
    .open .hamburger-middle {
        display: none;
    }
    .open .hamburger-bottom {
        transform: rotate(-45deg) translateY(6px) translateX(-6px);
    }
`

// const style = css`
//     header {
//         position: sticky;
//         padding-top: 32px;
//         top: -32px;
//         padding-left: 32px; 
//         padding-right: 32px; 
//         height: 75px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
//     ul {
//         list-style-type: none;
//         padding: 0;
//     }
//     li {
//         display: inline-block;
//         margin-left: 16px;
//         font-size: 18px;
//         font-weight: bold;
//     }
//     .dropdown{
//         position : relative;
//         display : inline-block;
//     }
//         .dropbtn{
//         background-color: #f5f5f5;
//         color : rgb(37, 37, 37);
//         text-align: center;
//         cursor : pointer;
//         font-size : 15px;
//     }
//     .dropdown-content{
//         display : none;
//         position : absolute;
//         z-index : 1; /*다른 요소들보다 앞에 배치*/
//         font-weight: 300;
//         background-color: #f9f9f9;
//         min-width : 80px;
//     }
//     .dropdown-content a{
//         display : block;
//         text-decoration : none;
//         color : rgb(37, 37, 37);
//         font-size: 12px;
//         padding : 15px 10px;
//     }
//     .dropdown-content a:hover{
//         background-color : #ececec
//     }
//     .dropdown:hover .dropdown-content {
//         display: block;
//     }
//     li li {
//             display: flex;
//             align-items: center;
//     }
// `

export const Header = () => {

    const [ isOpen, setOpen ] = useState(false)
    const handeToggle = () => {
        setOpen(!isOpen)
    }

    const navMyPage = [
        { label: '회원정보', path: '/users/information'},
        { label: '읽은책', path: '/comments/readingBooks'},
        { label: '찜한책', path: '/comments/likeBooks'},   
    ]
    
    return(
        <>
            <header className="container relative p-6 mx-auto">
                <nav className="flex items-center justify-between">
                    <ul className="flex items-center space-x-20">
                        <Link href="/"><a><Image src="/images/readviceLogo.svg" alt="Logo" width={100} height={100}/></a></Link>
                    </ul>
                    <ul className="items-center hidden space-x-6 font-bold text-grayishViolet lg:flex">
                        <li className="hover:text-veryDarkViolet"><Link href="/users/login"><a>Login</a></Link></li>
                        <li className="px-8 py-3 font-bold text-white rounded-full bg-cyan hover:opacity-70"><Link href="/users/join"><a>Sign Up</a></Link></li>
                    </ul>
                    {/* Hamburger Button */}
                    <button id="menu-btn" className="block hamburger lg:hidden focus:outline-none" type="button"
                        onClick={() => setOpen(!isOpen)}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button> 
                </nav>
                {/* Mobile Menu */}
                <nav id="menu" className={`absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100${isOpen ? "open":"hidden"}`}>
                    <ul className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                        {navMyPage.map(nav => (
                            <Link href={nav.path}><a className="w-full text-center">{nav.label}</a></Link>
                        ))}
                        <Link href="/users/login"><a className="w-full pt-6 text-center border-t border-gray-400">Login</a></Link>
                        <Link href="/users/join"><a className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</a></Link>
                    </ul>
                </nav>
                <style jsx>{style}</style>
            </header>
            {/* <header>
                <nav>
                    <ul>
                        <li className="dropdown">
                        <button type="button" className="btn btn-F2F2F0 btn-sm" data-bs-toggle="modal" data-bs-target="#loginBackdrop">Login</button>
                        <button type="button" className="btn btn-F2F2F0 btn-sm" data-bs-toggle="modal" data-bs-target="#signupBackdrop">Signup</button>
                        </li>
                        <li className="dropdown"> <Link href="#" className="dropbtn"><a>My Page</a></Link>
                            <ul className="dropdown-content">
                                {navMyPage.map(nav => (
                                    <Link href={nav.path}><a>{nav.label}</a></Link>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Link href="/users/login">login</Link>
            </div>
            <div className="modal fade" id="signupBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role = "document">
                    <div className="shadow modal-content rounded-4">
                        <div className="p-5 pb-4 modal-header border-bottom-0">
                            <h4 className="mb-0 fw-bold" id="staticBackdropLabel">Readvice 함께하기</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Join />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <style jsx>{style}</style> */}
        </>
    )
}