import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import css from "styled-jsx/css";

const style = css`
    header {
        position: sticky;
        padding-top: 32px;
        top: -32px;
        padding-left: 32px; 
        padding-right: 32px; 
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin-left: 16px;
        font-size: 18px;
        font-weight: bold;
    }
    .dropdown{
        position : relative;
        display : inline-block;
    }
        .dropbtn{
        background-color: #f5f5f5;
        color : rgb(37, 37, 37);
        text-align: center;
        cursor : pointer;
        font-size : 15px;
    }
    .dropdown-content{
        display : none;
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 300;
        background-color: #f9f9f9;
        min-width : 80px;
    }
    .dropdown-content a{
        display : block;
        text-decoration : none;
        color : rgb(37, 37, 37);
        font-size: 12px;
        padding : 15px 10px;
    }
    .dropdown-content a:hover{
        background-color : #ececec
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    li li {
            display: flex;
            align-items: center;
    }
`

export const Header = () => {
    return(
        <div>
            <header>
                <Link href="/"><Image src="/images/readviceLogo.svg" alt="readviceLogo" width={100} height={100}/></Link>
                <nav>
                    <ul>
                        <li className="dropdown">
                            <Link href="/users/login"><a>Login</a></Link>
                        </li>
                        <li>
                            <Link href="/users/join"><a>Signup</a></Link>
                        </li>
                        <li>
                        </li>
                        <li className="dropdown"> <Link href="#" className="dropbtn"><a>My Page</a></Link>
                            <ul className="dropdown-content">
                                {/* <Link href="/users/[id]" as={`/users/`}><a>회원정보</a></Link> */}
                                <Link href="/users/editProfile"><a>회원정보</a></Link>
                                <Link href="/myLibrary/myLibrary"><a>내 서재</a></Link>
                                {/* {navMyPage.map(nav => (
                                    <Link href={nav.path} key={nav.label}><a>{nav.label}</a></Link>
                                ))} */}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <style jsx>{style}</style>
        </div>
    )
}