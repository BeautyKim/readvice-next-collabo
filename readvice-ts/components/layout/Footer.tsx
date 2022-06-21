import Link from "next/link";

export const Footer = () => {
    return(
        <footer>
            <hr/>
            <div className="container">
                <Link href="/common/introduce" target='_target'><a>팀소개</a></Link>
            <p>Copyright ©2022 All rights reserved by Readvice</p>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }
            `}</style>
        </footer>
    )
}