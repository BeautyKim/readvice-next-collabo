import Image from "next/image";
import Link from "next/link";
import css from "styled-jsx/css";
import { Login } from "@/components";
import Join from "@/components/users/Join";

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

    const navMyPage = [
        { label: '회원정보', path: '/users/information'},
        { label: '읽은책', path: '/comments/readingBooks'},
        { label: '찜한책', path: '/comments/likeBooks'},
    ]
    return(
        <div>
            <header>
                <Link href="/"><Image src="/images/readviceLogo.svg" alt="readviceLogo" width={100} height={100}/></Link>
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
            <div className="modal fade" id="loginBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role = "document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h4 className="fw-bold mb-0" id="staticBackdropLabel">안녕하세요 Readvice 입니다</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="signupBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role = "document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h4 className="fw-bold mb-0" id="staticBackdropLabel">Readvice 함께하기</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Join />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{style}</style>
        </div>
    )
}